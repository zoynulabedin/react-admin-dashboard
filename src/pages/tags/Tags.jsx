import DataTable from "datatables.net-dt";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import ModalPopup from "../../components/ModalPopup/ModalPopup";

import useFormsFields from "../../hooks/useFormsFields";
import { createToasity } from "../../utility/toastify";
import { getAllProductDatas, setMessageEmpty } from "../../features/product/productSlice";


import { createUser } from "../../features/auth/authApiSlice";
import PageHeader from "../../components/pageHeader/PageHeader";
import { timeAgo } from "../../utility/timeago";
import { createTag, deleteTags } from "../../features/product/productApiSlice";

const Tags = () => {
	const dispatch = useDispatch();
		const { tags, error, message } = useSelector(getAllProductDatas);
    const [editUser, setEditUser] = useState({});

	const { input, handleInputchange, resetForm, setInput } = useFormsFields({
		name: "",

	});






	const handleEditBrand = (id) => {
		const EditData = tags?.find((data) => data._id === id);
		
		setEditUser(EditData);
		setSelected(EditData.role.name);

	};



		const handleEditUserChange = (e) => {
			
			setEditUser((prevState) => ({
				...prevState,
				[e.target.name]: e.target.value,
			}));
		};


		useEffect(() => {
			if (error) {
				createToasity(error, "error");
				dispatch(setMessageEmpty());
			} else if (message) {
				createToasity(message, "success");
				dispatch(setMessageEmpty());
			}
		}, [error, message, dispatch]);



	const HandleDeleteTag = (id) => {
		swal({
			title: "Are you sure?",
			text: "Are you sure that you want to delete this Tag?",
			icon: "warning",
			dangerMode: true,
		}).then((willDelete) => {
			dispatch(deleteTags(id));
			if (willDelete) {
				swal("Deleted!", "Your imaginary file has been deleted!", "success");
			}
		});
	};

	const handleStatus = (status, id) => {
		dispatch(updateStatusUser({ status, id }));
	};

const HandleTagsubmit = (e) => {
	e.preventDefault();
	dispatch(
		createTag({
			name: input.name,
			
		})
	);
	resetForm();
};

const updateUserRole = (e) => {
	e.preventDefault();
	dispatch(
		updateRoleUser({
			id: editUser._id,
			name: editUser.name,
			role: editUser.role,
		})
	);
};
	useEffect(() => {
		new DataTable(".table");
	},[]);

  return (
		<>
		<PageHeader title="Tags"/>
			<div className="row">
				<div className="col-md-12">
					<ModalPopup target="userModalPopup">
						<h4>Add Tag</h4>
						<form onSubmit={HandleTagsubmit}>
							<div className="my-3">
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={input.name}
									onChange={handleInputchange}
									className="form-control"
								/>
							</div>
							
							
						
							<div className="my-3 text-center">
							
								<button type="submit" className="btn btn-primary btn-block">
									Add New Tag
								</button>
							</div>
						</form>
					</ModalPopup>
					<ModalPopup target="userEditModalPopup">
						<h4>Edit Tags</h4>
						<form onSubmit={updateUserRole} >
							<div className="my-3">
								<input
									type="text"
									name="name"
									value={editUser?.name}
									placeholder="User Name"
									className="form-control"
									onChange={handleEditUserChange}
								/>
							</div>
						

							<div className="my-3">
								<button type="submit" className="btn btn-primary btn-block">
									Update User
								</button>
							</div>
						</form>
					</ModalPopup>
					<div className="card card-table">
						<div className="card-header d-flex justify-content-between">
							<h4 className="card-title">Tags List</h4>
							<button
								data-target="#userModalPopup"
								data-toggle="modal"
								className="btn btn-primary">
								Add new
							</button>
						</div>
						<div className="card-body">
							<div className="table-responsive">
								{tags && (
									<table className="table table-hover table-center mb-0">
										<thead>
											<tr>
												<th>#</th>
												<th>Name</th>
												<th>created At</th>
												<th>Status</th>
												<th className="text-right">Action</th>
											</tr>
										</thead>
										<tbody>
											{tags?.map((item, index) => {
												return (
													<tr key={index}>
														<td>{index + 1}</td>
														<td>{item.name}</td>
														
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
																onClick={() => handleEditBrand(item._id)}
																data-target="#userEditModalPopup"
																data-toggle="modal"
																className="btn btn-warning mr-1">
																<i
																	className="fe fe-edit"
																	aria-hidden="true"></i>
															</button>
															<button
																onClick={() => HandleDeleteTag(item._id)}
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
}

export default Tags