import Logo from "../../assets/img/logo.png"
import { BiLogoFacebook } from "react-icons/bi";
import {AiOutlineGooglePlus} from "react-icons/ai"
import { Link } from "react-router-dom";
const Register = () => {
	return (
		<>
			<div className="main-wrapper login-body">
				<div className="login-wrapper">
					<div className="container">
						<div className="loginbox">
							<div className="login-left">
								<img className="img-fluid" src={Logo} alt="Logo" />
							</div>
							<div className="login-right">
								<div className="login-right-wrap">
									<h1>Register</h1>
									<p className="account-subtitle">Access to our dashboard</p>

									<form action="https://dreamguys.co.in/demo/doccure/admin/login.html">
										<div className="form-group">
											<input
												className="form-control"
												type="text"
												placeholder="Name"
											/>
										</div>
										<div className="form-group">
											<input
												className="form-control"
												type="text"
												placeholder="Email"
											/>
										</div>
										<div className="form-group">
											<input
												className="form-control"
												type="text"
												placeholder="Password"
											/>
										</div>
										<div className="form-group">
											<input
												className="form-control"
												type="text"
												placeholder="Confirm Password"
											/>
										</div>
										<div className="form-group mb-0">
											<button
												className="btn btn-primary btn-block"
												type="submit">
												Register
											</button>
										</div>
									</form>

									<div className="login-or">
										<span className="or-line"></span>
										<span className="span-or">or</span>
									</div>

									<div className="social-login">
										<span>Register with</span>
										<Link to="#" className="facebook">
											<BiLogoFacebook />
										</Link>
										<Link to="#" className="google">
											<AiOutlineGooglePlus />
										</Link>
									</div>

									<div className="text-center dont-have">
										Already have an account? <Link to="/login">Login</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
