import { useEffect, useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { createUser } from "../../features/auth/authApiSlice";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { createToasity } from "../../utility/toastify";

const Register = () => {
	const dispatch = useDispatch();
	const {error, message} = useSelector((state) =>state.auth)
	const [input, setInput] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
	});

	const handleInputchange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name] : e.target.value
		}));
	};
	useEffect(() => {
		if (error) {
			createToasity(error, "error");
			dispatch(setMessageEmpty());
		}else if(message){
		createToasity(message, "success");
		dispatch(setMessageEmpty());
		}
	}, [error,message]);

	const handleSubmitForm = (e) => {
		e.preventDefault();
		if(!input.name || !input.email || !input.password){
			createToasity("All Fields are required!","error");
			
		}else if(input.password !== input.cpassword) {
			createToasity("Password not match", "error");
		} else {
		dispatch(
			createUser({
				name: input.name,
				email: input.email,
				password: input.password,
			})
		);
	
		}


	}


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

									<form onSubmit={handleSubmitForm}>
										<div className="form-group">
											<input
												className="form-control"
												type="text"
												placeholder="Name"
												value={input.name}
												onChange={handleInputchange}
												name="name"
											/>
										</div>
										<div className="form-group">
											<input
												className="form-control"
												type="text"
												placeholder="Email"
												value={input.email}
												onChange={handleInputchange}
												name="email"
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
											<input
												className="form-control"
												type="text"
												placeholder="Confirm Password"
												value={input.cpassword}
												onChange={handleInputchange}
												name="cpassword"
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
