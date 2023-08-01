import DataTable from "datatables.net-dt";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import { createPermission, deletePermission, getPermission, updateStatusPermission } from "../../features/user/userApiSlice";
import { getAllPermissions, setMessageEmpty } from "../../features/user/userSlice";
import { createToasity } from "../../utility/toastify";
import { timeAgo } from "../../utility/timeago";
const Permission = () => {
	const dispatch = useDispatch();
	const {permission,error, message} = useSelector(getAllPermissions);
console.log(permission);
	const [input, setInput] = useState({
		"name" : ""
	});


	const handleInputchange = (e) => {
		setInput((prevState) => ({
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
		}, [error, message,dispatch]);


	const handleFormsubmit = (e) => {
		e.preventDefault();
		dispatch(createPermission(input));
		
	};
	const handleStatus = (status, id) => {
		dispatch(updateStatusPermission({status, id}));
	}
	const DeletePermission = (id) => {
		swal({
			title: "Are you sure?",
			text: "Are you sure that you want to delete this permision?",
			icon: "warning",
			dangerMode: true,
		}).then((willDelete) => {
			dispatch(deletePermission(id));
			if (willDelete) {
				swal("Deleted!", "Your imaginary file has been deleted!", "success");
			}
		});
	
	};

	
	useEffect(() => {
		new DataTable(".table");
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-md-12">
					<ModalPopup target="userModalPopup">
						<h4>Add Permission</h4>
						<form onSubmit={handleFormsubmit}>
							<div className="my-3">
								<input
									type="text"
									name="name"
									value={input.name}
									onChange={handleInputchange}
									placeholder="Permission Name"
									className="form-control"
								/>
							</div>
							<div className="my-3">
								<button type="submit" className="btn btn-primary btn-block">
									Add
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
								{permission &&  (
									<table className="table table-hover table-center mb-0">
									<thead>
										<tr>
											<th>#</th>
											<th>Name</th>
											<th>Slug</th>
											<th>Created At</th>
											<th>Status</th>
											<th className="text-right">Actions</th>
										</tr>
									</thead>
									<tbody>
										{
											permission.map((item, index) => {
												return (
													<tr key={index}>
														<td>{index + 1}</td>
														<td>{item.name}</td>
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
																onClick={() => DeletePermission(item._id)}
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

export default Permission;
