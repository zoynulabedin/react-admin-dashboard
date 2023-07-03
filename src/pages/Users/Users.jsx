import DataTable from "datatables.net-dt";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import doct1 from "../../assets/img/doctors/doctor-thumb-01.jpg";
import ModalPopup from "../../components/ModalPopup/ModalPopup";



const Users = () => {

	useEffect(() => {
		new DataTable(".table");
	},[]);

  return (
		<>
			<div className="row">
				<div className="col-md-12">
					<ModalPopup target="userModalPopup">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium nam atque tempora facilis libero asperiores laudantium
							expedita molestias, reprehenderit ipsa recusandae consectetur? Et
							officiis dolorem odio tenetur repellat sunt saepe!
						</p>
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
											<th>Doctor Name</th>
											<th>Speciality</th>
											<th>Patient Name</th>
											<th>Apointment Time</th>
											<th>Status</th>
											<th className="text-right">Amount</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Dr. Ruby Perrin</Link>
												</h2>
											</td>
											<td>Dental</td>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Charlene Reed </Link>
												</h2>
											</td>
											<td>
												9 Nov 2019{" "}
												<span className="text-primary d-block">
													11.00 AM - 11.15 AM
												</span>
											</td>
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
											<td className="text-right">$200.00</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Dr. Darren Elder</Link>
												</h2>
											</td>
											<td>Dental</td>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Travis Trimble </Link>
												</h2>
											</td>

											<td>
												5 Nov 2019{" "}
												<span className="text-primary d-block">
													11.00 AM - 11.35 AM
												</span>
											</td>
											<td>
												<div className="status-toggle">
													<input
														type="checkbox"
														id="status_2"
														className="check"
														checked
													/>
													<label htmlFor="status_2" className="checktoggle">
														checkbox
													</label>
												</div>
											</td>
											<td className="text-right">$300.00</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Dr. Deborah Angel</Link>
												</h2>
											</td>
											<td>Cardiology</td>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Carl Kelly</Link>
												</h2>
											</td>
											<td>
												11 Nov 2019{" "}
												<span className="text-primary d-block">
													12.00 PM - 12.15 PM
												</span>
											</td>
											<td>
												<div className="status-toggle">
													<input
														type="checkbox"
														id="status_3"
														className="check"
														checked
													/>
													<label htmlFor="status_3" className="checktoggle">
														checkbox
													</label>
												</div>
											</td>
											<td className="text-right">$150.00</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Dr. Sofia Brient</Link>
												</h2>
											</td>
											<td>Urology</td>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html"> Michelle Fairfax</Link>
												</h2>
											</td>
											<td>
												7 Nov 2019
												<span className="text-primary d-block">
													1.00 PM - 1.20 PM
												</span>
											</td>
											<td>
												<div className="status-toggle">
													<input
														type="checkbox"
														id="status_4"
														className="check"
														checked
													/>
													<label htmlFor="status_4" className="checktoggle">
														checkbox
													</label>
												</div>
											</td>
											<td className="text-right">$150.00</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Dr. Marvin Campbell</Link>
												</h2>
											</td>
											<td>Orthopaedics</td>
											<td>
												<h2 className="table-avatar">
													<Link
														href="profile.html"
														className="avatar avatar-sm mr-2">
														<img
															className="avatar-img rounded-circle"
															src={doct1}
															alt="User Image"
														/>
													</Link>
													<Link href="profile.html">Gina Moore</Link>
												</h2>
											</td>

											<td>
												15 Nov 2019{" "}
												<span className="text-primary d-block">
													1.00 PM - 1.15 PM
												</span>
											</td>
											<td>
												<div className="status-toggle">
													<input
														type="checkbox"
														id="status_5"
														className="check"
														checked
													/>
													<label htmlFor="status_5" className="checktoggle">
														checkbox
													</label>
												</div>
											</td>
											<td className="text-right">$200.00</td>
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