import Logo from "../../assets/img/logo.png"
import { BiLogoFacebook } from "react-icons/bi";
import {AiOutlineGooglePlus} from "react-icons/ai"
import { Link } from "react-router-dom";
const Login = () => {
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
									<h1>Login</h1>
									<p className="account-subtitle">Access to our dashboard</p>

									<form action="https://dreamguys.co.in/demo/doccure/admin/index.html">
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
											<button
												className="btn btn-primary btn-block"
												type="submit">
												Login
											</button>
										</div>
									</form>

									<div className="text-center forgotpass">
										<Link to="/forgot">Forgot Password?</Link>
									</div>
									<div className="login-or">
										<span className="or-line"></span>
										<span className="span-or">or</span>
									</div>

									<div className="social-login">
										<span>Login with</span>
										<Link to="#" className="facebook">
											<BiLogoFacebook />
										</Link>
										<Link to="#" className="google">
											<AiOutlineGooglePlus />
										</Link>
									</div>

									<div className="text-center dont-have">
										Don’t have an account?{" "}
										<Link to="/register">Register</Link>
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

export default Login