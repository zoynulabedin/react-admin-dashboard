
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ModalPopup from "../../components/ModalPopup/ModalPopup";
import { passwordChange, profileUpdate } from '../../features/auth/authApiSlice';
import { getAuthData, setMessageEmpty } from '../../features/auth/authSlice';
import useAuth from '../../hooks/useAuth';
import { createToasity } from '../../utility/toastify';
export const Profile = () => {
	const { user } = useAuth();
	const dispatch = useDispatch();
	const { error, message} = useSelector(getAuthData);

	// password change fields
		const [input, setInput] = useState({
			oldpassword: "",
			newpassword: "",
			confirmpassword: ""
		});

		// info update fields
	const [profile, setprofile] = useState({
		birtdate: user?.birtdate ? user.birtdate : "",
		email: user?.email ? user.email : "",
		mobile: user?.mobile ? user.mobile : "",
		address: user?.address ? user.address : "",
		city: user?.city ? user.city : "",
		state: user?.state ? user.state : "",
		zipcode: user?.zipcode ? user.zipcode : "",
		country: user?.country ? user.country : "",
	});

	const handleInputchange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

const handleinfoChange = (e) => {
	setprofile((prevState) => ({
		...prevState,
		[e.target.name]: e.target.value,
	}));
};


	const [activeTab, setActiveTab] = useState(1);
	const handleTabClick = (tabnumber) => {
		setActiveTab(tabnumber);
	};
const handlepasswordSubmit = (e) => {
	e.preventDefault();
	if (!input.oldpassword || !input.newpassword || !input.confirmpassword) {
		createToasity("All fields are required!", "error");
	} else {
		dispatch(passwordChange(input));
	}
}


const handleInfoSubmit = (e) => {
	e.preventDefault();
	if (
		!profile.birtdate ||
		!profile.email ||
		!profile.mobile ||
		!profile.address ||
		!profile.city ||
		!profile.state ||
		!profile.zipcode ||
		!profile.country
	) {
		createToasity("All fields are required!", "error");
	} else {
		dispatch(profileUpdate(profile));
	}
};



	useEffect(() => {
		if (error) {
			createToasity(error, "error");
			dispatch(setMessageEmpty());
		} else if (message) {
			createToasity(message, "success");
			dispatch(setMessageEmpty());
		}
	}, [error, message]);

  return (
		<div className="row">
			<div className="col-md-12">
				<div className="profile-header">
					<div className="row align-items-center">
						<div className="col-auto profile-image">
							<Link>
								<img
									className="rounded-circle"
									alt="User Image"
									src={
										user?.photo
											? user.photo
											: "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
									}
								/>
							</Link>
						</div>
						<div className="col ml-md-n2 profile-user-info">
							<h4 className="user-name mb-0">{user?.name}</h4>
							<h6 className="text-muted">{user?.email}</h6>
							<div className="user-Location">
								<i className="fa fa-map-marker"></i> {user?.address}
							</div>
						</div>
						<div className="col-auto profile-btn">
							<button
								data-target="#userProfilePhoto"
								data-toggle="modal"
								className="btn btn-primary">
								Edit
							</button>
						</div>
					</div>
				</div>
				<div className="profile-menu">
					<ul className="nav nav-tabs nav-tabs-solid">
						<li className="nav-item">
							<Link
								className="nav-link active"
								data-toggle="tab"
								onClick={() => handleTabClick(1)}
								href="#per_details_tab">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								data-toggle="tab"
								onClick={() => handleTabClick(2)}
								href="#password_tab">
								Password
							</Link>
						</li>
					</ul>
				</div>
				<div className="tab-content profile-tab-cont">
					{activeTab === 1 ? (
						<div className="tab-pane fade show active" id="per_details_tab">
							<div className="row">
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title d-flex justify-content-between">
												<span>Personal Details</span>
												<button
													className="btn btn-primary"
													data-target="#userModalPopup"
													data-toggle="modal">
													<i className="fa fa-edit mr-1"></i>Edit
												</button>
											</h5>
											<div className="row">
												<p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
													Name
												</p>
												<p className="col-sm-10">{user?.name}</p>
											</div>

											<div className="row">
												<p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
													Email ID
												</p>
												<p className="col-sm-10">{user?.email}</p>
											</div>
											<div className="row">
												<p className="col-sm-2 text-muted text-sm-right mb-0 mb-sm-3">
													Mobile
												</p>
												<p className="col-sm-10">{user?.mobile}</p>
											</div>
											<div className="row">
												<p className="col-sm-2 text-muted text-sm-right mb-0">
													Address
												</p>
												<p className="col-sm-10 mb-0">{user?.address}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div id="password_tab">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Change Password</h5>
									<div className="row">
										<div className="col-md-10 col-lg-6">
											<form onSubmit={handlepasswordSubmit}>
												<div className="form-group">
													<label>Old Password</label>
													<input
														type="password"
														value={input.oldpassword}
														onChange={handleInputchange}
														name="oldpassword"
														className="form-control"
													/>
												</div>
												<div className="form-group">
													<label>New Password</label>
													<input
														type="password"
														value={input.newpassword}
														onChange={handleInputchange}
														name="newpassword"
														className="form-control"
													/>
												</div>
												<div className="form-group">
													<label>Confirm Password</label>
													<input
														type="password"
														value={input.confirmpassword}
														onChange={handleInputchange}
														name="confirmpassword"
														className="form-control"
													/>
												</div>
												<button className="btn btn-primary" type="submit">
													Save Changes
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
					<ModalPopup target="userProfilePhoto">
						<form action="">
							<div className="row form-row">
								<div className="col-12">
									<div className="form-group">
										<label>Date of Birth</label>
										<div className="cal-icon">
											<input
												type="file"
												
											/>
										</div>
									</div>
								</div>
								
							</div>
							<button type="submit" className="btn btn-primary btn-block">
								Save Changes
							</button>
						</form>
					</ModalPopup>
					<ModalPopup target="userModalPopup">
						<form onSubmit={handleInfoSubmit}>
							<div className="row form-row">
								<div className="col-12">
									<div className="form-group">
										<label>Date of Birth</label>
										<div className="cal-icon">
											<input
												type="date"
												onChange={handleinfoChange}
												className="form-control"
												name="birtdate"
												value={profile.birtdate}
											/>
										</div>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label>Email ID</label>
										<input
											type="email"
											onChange={handleinfoChange}
											className="form-control"
											name="email"
											value={profile.email}
										/>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label>Mobile</label>
										<input
											type="text"
											onChange={handleinfoChange}
											value={profile.mobile}
											className="form-control"
											name="mobile"
										/>
									</div>
								</div>
								<div className="col-12">
									<h5 className="form-title">
										<span>Address</span>
									</h5>
								</div>
								<div className="col-12">
									<div className="form-group">
										<label>Address</label>
										<input
											type="text"
											onChange={handleinfoChange}
											className="form-control"
											name="address"
											value={profile.address}
										/>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label>City</label>
										<input
											type="text"
											onChange={handleinfoChange}
											className="form-control"
											name="city"
											value={profile.city}
										/>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label>State</label>
										<input
											type="text"
											onChange={handleinfoChange}
											name="state"
											className="form-control"
											value={profile.state}
										/>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label>Zip Code</label>
										<input
											type="text"
											onChange={handleinfoChange}
											name="zipcode"
											className="form-control"
											value={profile.zipcode}
										/>
									</div>
								</div>
								<div className="col-12 col-sm-6">
									<div className="form-group">
										<label>Country</label>
										<input
											type="text"
											onChange={handleinfoChange}
											className="form-control"
											name="country"
											value={profile.country}
										/>
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn-primary btn-block">
								Save Changes
							</button>
						</form>
					</ModalPopup>
				</div>
			</div>
		</div>
	);
}

