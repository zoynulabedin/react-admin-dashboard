import DataTable from "datatables.net-dt";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import { DeleteRole, createRole, updateRole, updateStatusRole } from "../../features/user/userApiSlice";
import { getAllPermissions, setMessageEmpty } from "../../features/user/userSlice";

import swal from "sweetalert";
import useFormsFields from "../../hooks/useFormsFields";
import { timeAgo } from "../../utility/timeago";
import { createToasity } from "../../utility/toastify";

const Roles = () => {
	const dispatch = useDispatch();
	const { permission,role, error, message } = useSelector(getAllPermissions);
	const { input, handleInputchange, resetForm } = useFormsFields({
		name: "",
	});

	const [selected, setSelected] = useState([]);
	const [editrole, setEditrole] = useState({});
	const selectedInputChange = (e) => {
		const val = e.target.value;
		const updatedList = [...selected];
		if(selected.includes(val)) {
			updatedList.splice(selected.indexOf(val), 1);
		}else {
			updatedList.push(val);
		}
		setSelected(updatedList);
	};

	const handleCreateRole = (e) => {
		e.preventDefault();
		dispatch(
			createRole({
				name: input.name,
				permissions: [...selected]
			}),
			resetForm(),
		);
		
		setSelected([]);
	};

	const handleEditRole = (id) => {
		const EditData = role.find((data) => data._id === id);
		setEditrole(EditData);
		setSelected(EditData.permissions);
	}

	const handleEditRoleChange = (e) => {
	setEditrole((prevState) => ({
		...prevState,
	[e.target.name] : e.target.value
	}))
	
	};

	const handleUpdateRole = (e) => {
		e.preventDefault();
		dispatch(
			updateRole({
				id: editrole._id,
				name: editrole.name,
				permissions: selected
			})
		);
	};
	const DeleteRoleHandle = (id) => {
		swal({
			title: "Are you sure?",
			text: "Are you sure that you want to delete this Role?",
			icon: "warning",
			dangerMode: true,
		}).then((willDelete) => {
			dispatch(DeleteRole(id));
			if (willDelete) {
				swal("Deleted!", "Your imaginary file has been deleted!", "success");
			}
		});
	};

		const handleStatus = (status, id) => {
			dispatch(updateStatusRole({ status, id }));
		};
		useEffect(() => {
			if (error && permission) {
				createToasity(error, "error");
				dispatch(setMessageEmpty());
			} else if (message) {
				createToasity(message, "success");
				dispatch(setMessageEmpty());
			}
		}, [error, message, permission, dispatch]);
	useEffect(() => {
		new DataTable(".table");
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-md-12">
					<ModalPopup target="userModalPopup">
						<h4>Add Role</h4>
						<form onSubmit={handleCreateRole}>
							<div className="my-3">
								<input
									type="text"
									name="name"
									placeholder="Role Name"
									value={input.name}
									className="form-control"
									onChange={handleInputchange}
								/>
							</div>
							<div className="my-3">
								<label htmlFor="">Permisson</label>
								{permission?.map((item, index) => {
									return (
										<label key={index} className="d-block">
											<input
												type="checkbox"
												onChange={selectedInputChange}
												selected={selected.includes(item.slug)}
												value={item.slug}
												name={item.slug}
											/>{" "}
											{item.name}
										</label>
									);
								})}
							</div>
							<div className="my-3">
								<button type="submit" className="btn btn-primary btn-block">
									Add New Role
								</button>
							</div>
						</form>
					</ModalPopup>
					<ModalPopup target="roleEdit">
						<h4>Edit Role</h4>
						<form onSubmit={handleUpdateRole}>
							<div className="my-3">
								<input
									type="text"
									name="name"
									placeholder="Role Name"
									value={editrole.name}
									className="form-control"
									onChange={handleEditRoleChange}
								/>
							</div>
							<div className="my-3">
								<label htmlFor="">Permisson</label>
								{permission?.map((item, index) => {
									return (
										<label key={index} className="d-block">
											<input
												type="checkbox"
												onChange={selectedInputChange}
												checked={selected?.includes(item.slug)}
												value={item.slug}
												name={item.slug}
											/>
											{item.name}
										</label>
									);
								})}
							</div>
							<div className="my-3">
								<button type="submit" className="btn btn-primary btn-block">
									Update Role
								</button>
							</div>
						</form>
					</ModalPopup>
					<div className="card card-table">
						<div className="card-header d-flex justify-content-between">
							<h4 className="card-title">Appointment List</h4>
							<button
								data-target="#userModalPopup"
								data-toggle="modal"
								className="btn btn-primary">
								Add new
							</button>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								{role && (
									<table className="table table-hover table-center mb-0">
										<thead>
											<tr>
												<th>#</th>
												<th>Role Name</th>
												<th>Slug</th>
												<th>Permission level</th>
												<th>createdAt</th>
												<th>Status</th>
												<th className="text-right">Action</th>
											</tr>
										</thead>
										<tbody>
											{role?.map((item, index) => {
												return (
													<tr key={index}>
														<td>{index + 1}</td>
														<td>{item.name}</td>
														<td>
															<ul className="permission-lv">
																{item.permissions?.map((permission, index) => {
																	return <li key={index}>{permission}</li>;
																})}
															</ul>
														</td>
														<td>{item.slug}</td>
														<td>{timeAgo(item.createdAt)}</td>
														<td>
															<div className="status-toggle">
																<input
																	type="checkbox"
																	id="status_1"
																	className="check"
																	checked={item.status ? true : false}
																/>
																<label
																	onClick={() =>
																		handleStatus(item.status, item._id)
																	}
																	htmlFor="status_1"
																	className="checktoggle">
																	checkbox
																</label>
															</div>
														</td>
														<td className="text-right">
															<button
																onClick={() => handleEditRole(item._id)}
																data-toggle="modal"
																data-target="#roleEdit"
																className="btn btn-info mr-1">
																<i
																	className="fe fe-edit"
																	aria-hidden="true"></i>
															</button>
															<button
																onClick={() => DeleteRoleHandle(item._id)}
																className="btn btn-danger">
																<i
																	className="fe fe-trash"
																	aria-hidden="true"></i>
															</button>
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Roles;
