import DataTable from "datatables.net-dt";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import { createUser } from "../../features/user/userApiSlice";
import useFormsFields from "../../hooks/useFormsFields";
import generateRandomPassword from "../../utility/generatePassword";


const Users = () => {
	const dispatch = useDispatch();
	const { input, handleInputchange, resetForm, setInput } = useFormsFields({
		name: "",
		email: "",
		password: "",
	});

const [showPassword, setShowPassword] = useState('');
 const handleTogglePassword = () => {
 setShowPassword(!showPassword);
}
const handleRandomPassword = (e) => {
	e.preventDefault();
	setInput((prevState) => (
		{
		...prevState,
		password: generateRandomPassword()
		}
		))
	
}

const HandleUserSubmit = (e) => {
	e.preventDefault();
	dispatch(createUser(input));
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
										<tr>
											<td>01</td>
											<td>zoynul</td>
											<td>Admin</td>
											<td>trustcodernet@gmail.com</td>
											<td>1 min ago</td>
											<td>
												<div className="status-toggle">
													<input
														type="checkbox"
														id="status_1"
														className="check"
													/>
													<label htmlFor="status_1" className="checktoggle">
														checkbox
													</label>
												</div>
											</td>
											<td className="text-right">
												<button className="btn btn-warning mr-1">
													<i className="fe fe-edit" aria-hidden="true"></i>
												</button>
												<button className="btn btn-danger">
													<i className="fe fe-trash" aria-hidden="true"></i>
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Users