import { Link } from "react-router-dom";
import doctor1 from "../../assets/img/doctors/doctor-thumb-01.jpg";
import doctor2 from "../../assets/img/doctors/doctor-thumb-02.jpg";
import { default as doctor3, default as doctor4 } from "../../assets/img/doctors/doctor-thumb-03.jpg";
import LogoSmal from "../../assets/img/logo-small.png";
import Logo from "../../assets/img/logo.png";
import Profile from "../../assets/img/profiles/avatar-01.jpg";

import './Header.scss';
import useDropDownPopup from "../../hooks/useDropDownPopup";
const Header = () => {

	const { isOpen, toogleMenu, dorpDownRef } = useDropDownPopup();
	return (
		<>
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
					<li className="nav-item dropdown noti-dropdown" onClick={toogleMenu}>
						<Link
							to="#"
							className="dropdown-toggle nav-link"
							data-toggle="dropdown">
							<i className="fe fe-bell"></i>{" "}
							<span className="badge badge-pill">3</span>
						</Link>
						{isOpen && (
							<div
								className="dropdown-menu notifications d-block"
								style={{ transform: "translate(-305px, 0px)" }}>
								<div className="topnav-dropdown-header">
									<span className="notification-title">Notifications</span>
									<Link to="javascript:void(0)" className="clear-noti">
										Clear All
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
															src={doctor4}
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
															src={doctor1}
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
															src={doctor2}
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
															src={doctor3}
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
						)}
					</li>

					<li className="nav-item dropdown has-arrow" ref={dorpDownRef} onClick={toogleMenu}>
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
						{isOpen && (
							<div
								className="dropdown-menu d-block"
								style={{ transform: "translate(-139px,0px)" }}>
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
						)}
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
