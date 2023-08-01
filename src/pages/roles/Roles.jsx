import DataTable from "datatables.net-dt";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import { getAllPermissions } from "../../features/user/userSlice";
import { useFormsFields } from "../../hooks/useFormsFields";

const Roles = () => {
	const { permission, error, message } = useSelector(getAllPermissions);
	console.log(permission);
	const { input, handleInputchange } = useFormsFields({
		name: ""
	});
	useEffect(() => {
		new DataTable(".table");
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-md-12">
					<ModalPopup target="userModalPopup">
						<h4>Add Role</h4>
						<form>
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
								<label className="d-block">
									<input type="checkbox" name="" /> Dashboard
								</label>
								<label className="d-block">
									<input type="checkbox" name="" /> Role
								</label>
							</div>
							<div className="my-3">
								<button type="submit" className="btn btn-primary btn-block">
									Add New Role
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
											<th>Role Name</th>
											<th>Slug</th>
											<th>createdAt</th>
											<th>Status</th>
											<th className="text-right">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Role name</td>
											<td>slug</td>
											<td>30 min ago</td>
											<td>
												<div className="status-toggle">
													<input
														type="checkbox"
														id="status_1"
														className="check"
														checked
													/>
													<label htmlFor="status_1" className="checktoggle">
														checkbox
													</label>
												</div>
											</td>
											<td className="text-right">
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
};

export default Roles;
