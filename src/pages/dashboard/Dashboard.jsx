
import DataTables from "datatables.net-dt";
import specalistImg from "../../assets/img/specialities/specialities-01.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Dashboard = () => {
		useEffect(() => {
			new DataTables(".datatable");
		}, []);
  return (
		<>
			<div className="row">
				<div className="col-xl-3 col-sm-6 col-12">
					<div className="card">
						<div className="card-body">
							<div className="dash-widget-header">
								<span className="dash-widget-icon text-primary border-primary">
									<i className="fe fe-users"></i>
								</span>
								<div className="dash-count">
									<h3>168</h3>
								</div>
							</div>
							<div className="dash-widget-info">
								<h6 className="text-muted">Doctors</h6>
								<div className="progress progress-sm">
									<div className="progress-bar bg-primary w-50"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6 col-12">
					<div className="card">
						<div className="card-body">
							<div className="dash-widget-header">
								<span className="dash-widget-icon text-success">
									<i className="fe fe-credit-card"></i>
								</span>
								<div className="dash-count">
									<h3>487</h3>
								</div>
							</div>
							<div className="dash-widget-info">
								<h6 className="text-muted">Patients</h6>
								<div className="progress progress-sm">
									<div className="progress-bar bg-success w-50"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6 col-12">
					<div className="card">
						<div className="card-body">
							<div className="dash-widget-header">
								<span className="dash-widget-icon text-danger border-danger">
									<i className="fe fe-money"></i>
								</span>
								<div className="dash-count">
									<h3>485</h3>
								</div>
							</div>
							<div className="dash-widget-info">
								<h6 className="text-muted">Appointment</h6>
								<div className="progress progress-sm">
									<div className="progress-bar bg-danger w-50"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-sm-6 col-12">
					<div className="card">
						<div className="card-body">
							<div className="dash-widget-header">
								<span className="dash-widget-icon text-warning border-warning">
									<i className="fe fe-folder"></i>
								</span>
								<div className="dash-count">
									<h3>$62523</h3>
								</div>
							</div>
							<div className="dash-widget-info">
								<h6 className="text-muted">Revenue</h6>
								<div className="progress progress-sm">
									<div className="progress-bar bg-warning w-50"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-sm-12">
					<div className="card">
						<div className="card-body">
							<div className="table-responsive">
								<table className="datatable table table-hover table-center mb-0">
									<thead>
										<tr>
											<th>#</th>
											<th>Specialities</th>
											<th className="text-right">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>#SP001</td>

											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img"
															src={specalistImg}
															alt="Speciality"
														/>
													</Link>
													<Link href="profile.html">Urology</Link>
												</h2>
											</td>

											<td className="text-right">
												<div className="actions">
													<Link
														className="btn btn-sm bg-success-light"
														data-toggle="modal"
														href="#edit_specialities_details">
														<i className="fe fe-pencil"></i> Edit
													</Link>
													<Link
														data-toggle="modal"
														href="#delete_modal"
														className="btn btn-sm bg-danger-light">
														<i className="fe fe-trash"></i> Delete
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>#SP002</td>

											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img"
															src={specalistImg}
															alt="Speciality"
														/>
													</Link>
													<Link href="profile.html">Neurology</Link>
												</h2>
											</td>

											<td className="text-right">
												<div className="actions">
													<Link
														className="btn btn-sm bg-success-light"
														data-toggle="modal"
														href="#edit_specialities_details">
														<i className="fe fe-pencil"></i> Edit
													</Link>
													<Link
														data-toggle="modal"
														href="#delete_modal"
														className="btn btn-sm bg-danger-light">
														<i className="fe fe-trash"></i> Delete
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>#SP003</td>

											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img"
															src={specalistImg}
															alt="Speciality"
														/>
													</Link>
													<Link href="profile.html">Orthopedic</Link>
												</h2>
											</td>

											<td className="text-right">
												<div className="actions">
													<Link
														className="btn btn-sm bg-success-light"
														data-toggle="modal"
														href="#edit_specialities_details">
														<i className="fe fe-pencil"></i> Edit
													</Link>
													<Link
														data-toggle="modal"
														href="#delete_modal"
														className="btn btn-sm bg-danger-light">
														<i className="fe fe-trash"></i> Delete
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>#SP004</td>

											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img"
															src={specalistImg}
															alt="Speciality"
														/>
													</Link>
													<Link href="profile.html">Cardiologist</Link>
												</h2>
											</td>

											<td className="text-right">
												<div className="actions">
													<Link
														className="btn btn-sm bg-success-light"
														data-toggle="modal"
														href="#edit_specialities_details">
														<i className="fe fe-pencil"></i> Edit
													</Link>
													<Link
														data-toggle="modal"
														href="#delete_modal"
														className="btn btn-sm bg-danger-light">
														<i className="fe fe-trash"></i> Delete
													</Link>
												</div>
											</td>
										</tr>
										<tr>
											<td>#SP005</td>

											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img"
															src={specalistImg}
															alt="Speciality"
														/>
													</Link>
													<Link href="profile.html">Dentist</Link>
												</h2>
											</td>

											<td className="text-right">
												<div className="actions">
													<Link
														className="btn btn-sm bg-success-light"
														data-toggle="modal"
														href="#edit_specialities_details">
														<i className="fe fe-pencil"></i> Edit
													</Link>
													<Link
														className="btn btn-sm bg-danger-light"
														data-toggle="modal"
														href="#delete_modal">
														<i className="fe fe-trash"></i> Delete
													</Link>
												</div>
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

export default Dashboard