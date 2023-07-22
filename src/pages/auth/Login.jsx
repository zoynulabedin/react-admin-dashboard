import { useEffect, useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { loginUser } from "../../features/auth/authApiSlice";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { createToasity } from "../../utility/toastify";
const Login = () => {
	const dispatch = useDispatch();
	const {error, message,user} = useSelector((state) =>state.auth);

	const [input, setInput] = useState({
		email:"",
		password:"",
	});

	const handleInputchange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		if(!input.email || !input.password){
			createToasity("All fields are required!", "error");
		}else {
			dispatch(loginUser(input));
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

									<form onSubmit={handleLoginSubmit}>
										<div className="form-group">
											<input
												className="form-control"
												type="text"
												value={input.email}
												placeholder="Email"
												name="email"
												onChange={handleInputchange}
											/>
										</div>
										<div className="form-group">
											<input
												className="form-control"
												type="text"
												placeholder="Password"
												value={input.password}
												onChange={handleInputchange}
												name="password"
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
										Don’t have an account? <Link to="/register">Register</Link>
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