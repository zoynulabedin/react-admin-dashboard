
import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png"
import LogoSmal from "../../assets/img/logo-small.png"
import Profile from "../../assets/img/profiles/avatar-01.jpg"
const Dashboard = () => {
  return (
		<>
			<div className="main-wrapper">
				<div className="header">
					<div className="header-left">
						<Link to="index.html" className="logo">
							<img src={Logo} alt="Logo" />
						</Link>
						<Link to="index.html" className="logo logo-small">
							<img src={LogoSmal} alt="Logo" width="30" height="30" />
						</Link>
					</div>

					<Link href="javascript:void(0);" id="toggle_btn">
						<i className="fe fe-text-align-left"></i>
					</Link>

					<div className="top-nav-search">
						<form>
							<input
								type="text"
								className="form-control"
								placeholder="Search here"
							/>
							<button className="btn" type="submit">
								<i className="fa fa-search"></i>
							</button>
						</form>
					</div>

					<Link className="mobile_btn" id="mobile_btn">
						<i className="fa fa-bars"></i>
					</Link>

					<ul className="nav user-menu">
						<li className="nav-item dropdown noti-dropdown">
							<Link
								to="#"
								className="dropdown-toggle nav-link"
								data-toggle="dropdown">
								<i className="fe fe-bell"></i>{" "}
								<span className="badge badge-pill">3</span>
							</Link>
							<div className="dropdown-menu notifications">
								<div className="topnav-dropdown-header">
									<span className="notification-title">Notifications</span>
									<Link to="javascript:void(0)" className="clear-noti">
										{" "}
										Clear All{" "}
									</Link>
								</div>
								<div className="noti-content">
									<ul className="notification-list">
										<li className="notification-message">
											<Link to="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img
															className="avatar-img rounded-circle"
															alt="User Image"
															src="assets/img/doctors/doctor-thumb-01.jpg"
														/>
													</span>
													<div className="media-body">
														<p className="noti-details">
															<span className="noti-title">
																Dr. Ruby Perrin
															</span>{" "}
															Schedule{" "}
															<span className="noti-title">
																her appointment
															</span>
														</p>
														<p className="noti-time">
															<span className="notification-time">
																4 mins ago
															</span>
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="notification-message">
											<Link to="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img
															className="avatar-img rounded-circle"
															alt="User Image"
															src="assets/img/patients/patient1.jpg"
														/>
													</span>
													<div className="media-body">
														<p className="noti-details">
															<span className="noti-title">Charlene Reed</span>{" "}
															has booked her appointment to{" "}
															<span className="noti-title">
																Dr. Ruby Perrin
															</span>
														</p>
														<p className="noti-time">
															<span className="notification-time">
																6 mins ago
															</span>
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="notification-message">
											<Link to="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img
															className="avatar-img rounded-circle"
															alt="User Image"
															src="assets/img/patients/patient2.jpg"
														/>
													</span>
													<div className="media-body">
														<p className="noti-details">
															<span className="noti-title">Travis Trimble</span>{" "}
															sent a amount of $210 for his{" "}
															<span className="noti-title">appointment</span>
														</p>
														<p className="noti-time">
															<span className="notification-time">
																8 mins ago
															</span>
														</p>
													</div>
												</div>
											</Link>
										</li>
										<li className="notification-message">
											<Link to="#">
												<div className="media">
													<span className="avatar avatar-sm">
														<img
															className="avatar-img rounded-circle"
															alt="User Image"
															src="assets/img/patients/patient3.jpg"
														/>
													</span>
													<div className="media-body">
														<p className="noti-details">
															<span className="noti-title">Carl Kelly</span>{" "}
															send a message{" "}
															<span className="noti-title"> to his doctor</span>
														</p>
														<p className="noti-time">
															<span className="notification-time">
																12 mins ago
															</span>
														</p>
													</div>
												</div>
											</Link>
										</li>
									</ul>
								</div>
								<div className="topnav-dropdown-footer">
									<Link to="#">View all Notifications</Link>
								</div>
							</div>
						</li>

						<li className="nav-item dropdown has-arrow">
							<Link
								to="#"
								className="dropdown-toggle nav-link"
								data-toggle="dropdown">
								<span className="user-img">
									<img
										className="rounded-circle"
										src={Profile}
										width="31"
										alt="Ryan Taylor"
									/>
								</span>
							</Link>
							<div className="dropdown-menu">
								<div className="user-header">
									<div className="avatar avatar-sm">
										<img
											src={Profile}
											alt="User Image"
											className="avatar-img rounded-circle"
										/>
									</div>
									<div className="user-text">
										<h6>Ryan Taylor</h6>
										<p className="text-muted mb-0">Administrator</p>
									</div>
								</div>
								<Link className="dropdown-item" href="profile.html">
									My Profile
								</Link>
								<Link className="dropdown-item" href="settings.html">
									Settings
								</Link>
								<Link className="dropdown-item" href="login.html">
									Logout
								</Link>
							</div>
						</li>
					</ul>
				</div>

				<div className="sidebar" id="sidebar">
					<div className="sidebar-inner slimscroll">
						<div id="sidebar-menu" className="sidebar-menu">
							<ul>
								<li className="menu-title">
									<span>Main</span>
								</li>
								<li className="active">
									<Link to="index.html">
										<i className="fe fe-home"></i> <span>Dashboard</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="page-wrapper">
					<div className="content container-fluid">
						<div className="page-header">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="page-title">Welcome Admin!</h3>
									<ul className="breadcrumb">
										<li className="breadcrumb-item active">Dashboard</li>
									</ul>
								</div>
							</div>
						</div>

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
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard