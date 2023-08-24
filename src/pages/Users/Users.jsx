import DataTable from "datatables.net-dt";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import { DeleteUser, createUser, updateRoleUser, updateStatusUser } from "../../features/user/userApiSlice";
import { getAllPermissions, setMessageEmpty } from "../../features/user/userSlice";
import useFormsFields from "../../hooks/useFormsFields";
import generateRandomPassword from "../../utility/generatePassword";
import { timeAgo } from "../../utility/timeago";
import { createToasity } from "../../utility/toastify";
const Users = () => {
	const dispatch = useDispatch();
		const { user,role, error, message } = useSelector(getAllPermissions);

	const { input, handleInputchange, resetForm, setInput } = useFormsFields({
		name: "",
		email: "",
		password: "",
		role: "",
	});
	
const [selected, setSelected] = useState('');
const [editUser, setEditUser] = useState({});
const [showPassword, setShowPassword] = useState('');

const handleSelect = (e) => {
	setSelected(e.target.value);
};



	const handleEditUser = (id) => {
		const EditData = user?.find((data) => data._id === id);
		
		setEditUser(EditData);
		setSelected(EditData.role.name);

	};



		const handleEditUserChange = (e) => {
			
			setEditUser((prevState) => ({
				...prevState,
				[e.target.name]: e.target.value,
			}));
		};

 const handleTogglePassword = () => {
 setShowPassword(!showPassword);
}
		useEffect(() => {
			if (error) {
				createToasity(error, "error");
				dispatch(setMessageEmpty());
			} else if (message) {
				createToasity(message, "success");
				dispatch(setMessageEmpty());
			}
		}, [error, message, dispatch]);
const handleRandomPassword = (e) => {
	e.preventDefault();
	setInput((prevState) => (
		{
		...prevState,
		password: generateRandomPassword()
		}
		))
	
}



	const HandleDeleteUser = (id) => {
		swal({
			title: "Are you sure?",
			text: "Are you sure that you want to delete this permision?",
			icon: "warning",
			dangerMode: true,
		}).then((willDelete) => {
			dispatch(DeleteUser(id));
			if (willDelete) {
				swal("Deleted!", "Your imaginary file has been deleted!", "success");
			}
		});
	};

	const handleStatus = (status, id) => {
		dispatch(updateStatusUser({ status, id }));
	};

const HandleUserSubmit = (e) => {
	e.preventDefault();
	dispatch(
		createUser({
			name: input.name,
			email: input.email,
			password: input.password,
			role: selected,
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
			<div className="row">
				<div className="col-md-12">
					<ModalPopup target="userModalPopup">
						<h4>Add User</h4>
						<form onSubmit={HandleUserSubmit}>
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
							<div className="my-3">
								<input
									type="text"
									name="email"
									placeholder="Email"
									value={input.email}
									onChange={handleInputchange}
									className="form-control"
								/>
							</div>
							<div className="my-3">
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									placeholder="Password"
									value={input.password}
									onChange={handleInputchange}
									className="form-control"
								/>
								<label onClick={handleTogglePassword}>
									<i className="fe fe-eye" aria-hidden="true"></i>
								</label>
							</div>
							<div className="my-3">
								<select
									onChange={handleSelect}
									className="form-control"
									name={input?.role}
									id="">
									<option value="">--Select--</option>
									{role?.map((item, index) => {
										return (
											<option key={index} value={item._id}>
												{item.name}
											</option>
										);
									})}
								</select>
							</div>
							<div className="my-3 text-center">
								<a
									href=""
									onClick={handleRandomPassword}
									className="btn btn-info mb-2">
									Generate Password
								</a>
								<button type="submit" className="btn btn-primary btn-block">
									Add New User
								</button>
							</div>
						</form>
					</ModalPopup>
					<ModalPopup target="userEditModalPopup">
						<h4>Edit User</h4>
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
								<select
									className="form-control"
									onChange={handleEditUserChange}
									name="role"
									id="">
									<option value="">--Select--</option>
									{role?.map((item, index) => {
										return (
											<option key={index} value={item._id}>
												{item.name}
											</option>
										);
									})}
								</select>
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
								{user && (
									<table className="table table-hover table-center mb-0">
										<thead>
											<tr>
												<th>#</th>
												<th>Name</th>
												<th>Role</th>
												<th>Email</th>
												<th>created At</th>
												<th>Status</th>
												<th className="text-right">Action</th>
											</tr>
										</thead>
										<tbody>
											{user?.map((item, index) => {
												return (
													<tr key={index}>
														<td>{index + 1}</td>
														<td>{item.name}</td>
														<td>{item?.role?.name}</td>
														<td>{item.email}</td>
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
																onClick={() => handleEditUser(item._id)}
																data-target="#userEditModalPopup"
																data-toggle="modal"
																className="btn btn-warning mr-1">
																<i
																	className="fe fe-edit"
																	aria-hidden="true"></i>
															</button>
															<button
																onClick={() => HandleDeleteUser(item._id)}
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

export default Users