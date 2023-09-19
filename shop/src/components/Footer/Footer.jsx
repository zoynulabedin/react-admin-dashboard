import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png";
import payment1 from "../../assets/img/payment/payment-1.png";
import payment2 from "../../assets/img/payment/payment-2.png";
import payment3 from "../../assets/img/payment/payment-3.png";
import payment4 from "../../assets/img/payment/payment-4.png";
import payment5 from "../../assets/img/payment/payment-5.png";
const Footer = () => {
  return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-7">
							<div className="footer__about">
								<div className="footer__logo">
									<Link to="/">
										<img src={logo} alt="" />
									</Link>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt cilisis.
								</p>
								<div className="footer__payment">
									<Link to="#">
										<img src={payment1} alt="" />
									</Link>
									<Link to="#">
										<img src={payment2} alt="" />
									</Link>
									<Link to="#">
										<img src={payment3} alt="" />
									</Link>
									<Link to="#">
										<img src={payment4} alt="" />
									</Link>
									<Link to="#">
										<img src={payment5} alt="" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-5">
							<div className="footer__widget">
								<h6>Quick links</h6>
								<ul>
									<li>
										<Link to="#">About</Link>
									</li>
									<li>
										<Link to="#">Blogs</Link>
									</li>
									<li>
										<Link to="#">Contact</Link>
									</li>
									<li>
										<Link to="#">FAQ</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-4">
							<div className="footer__widget">
								<h6>Account</h6>
								<ul>
									<li>
										<Link to="#">My Account</Link>
									</li>
									<li>
										<Link to="#">Orders Tracking</Link>
									</li>
									<li>
										<Link to="#">Checkout</Link>
									</li>
									<li>
										<Link to="#">Wishlist</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-8 col-sm-8">
							<div className="footer__newslatter">
								<h6>NEWSLETTER</h6>
								<form action="#">
									<input type="text" placeholder="Email" />
									<button type="submit" className="site-btn">
										Subscribe
									</button>
								</form>
								<div className="footer__social">
									<Link to="#">
										<i className="fa fa-facebook"></i>
									</Link>
									<Link to="#">
										<i className="fa fa-twitter"></i>
									</Link>
									<Link to="#">
										<i className="fa fa-youtube-play"></i>
									</Link>
									<Link to="#">
										<i className="fa fa-instagram"></i>
									</Link>
									<Link to="#">
										<i className="fa fa-pinterest"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="footer__copyright__text">
								<p>Copyright &copy; All rights reserved </p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer