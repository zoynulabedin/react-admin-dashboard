import { Link } from "react-router-dom";

import "./categoryFitler.scss";
const CategoryFilter = () => {
	return (
		<>
			<div className="sidebar__categories">
				<div className="section-title">
					<h4>Categories</h4>
				</div>
				<div className="categories__accordion">
					<div className="accordion" id="accordionExample">
						<div className="card">
							<div className="card-heading active">
								<Link data-toggle="collapse" data-target="#collapseOne">
									Women
								</Link>
							</div>
							<div
								id="collapseOne"
								className="collapse show"
								data-parent="#accordionExample">
								<div className="card-body">
									<ul>
										<li>
											<Link to="#">Coats</Link>
										</li>
										<li>
											<Link to="#">Jackets</Link>
										</li>
										<li>
											<Link to="#">Dresses</Link>
										</li>
										<li>
											<Link to="#">Shirts</Link>
										</li>
										<li>
											<Link to="#">T-shirts</Link>
										</li>
										<li>
											<Link to="#">Jeans</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-heading">
								<Link data-toggle="collapse" data-target="#collapseTwo">
									Men
								</Link>
							</div>
							<div
								id="collapseTwo"
								className="collapse"
								data-parent="#accordionExample">
								<div className="card-body">
									<ul>
										<li>
											<Link to="#">Coats</Link>
										</li>
										<li>
											<Link to="#">Jackets</Link>
										</li>
										<li>
											<Link to="#">Dresses</Link>
										</li>
										<li>
											<Link to="#">Shirts</Link>
										</li>
										<li>
											<Link to="#">T-shirts</Link>
										</li>
										<li>
											<Link to="#">Jeans</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-heading">
								<Link data-toggle="collapse" data-target="#collapseThree">
									Kids
								</Link>
							</div>
							<div
								id="collapseThree"
								className="collapse"
								data-parent="#accordionExample">
								<div className="card-body">
									<ul>
										<li>
											<Link to="#">Coats</Link>
										</li>
										<li>
											<Link to="#">Jackets</Link>
										</li>
										<li>
											<Link to="#">Dresses</Link>
										</li>
										<li>
											<Link to="#">Shirts</Link>
										</li>
										<li>
											<Link to="#">T-shirts</Link>
										</li>
										<li>
											<Link to="#">Jeans</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-heading">
								<Link data-toggle="collapse" data-target="#collapseFour">
									Accessories
								</Link>
							</div>
							<div
								id="collapseFour"
								className="collapse"
								data-parent="#accordionExample">
								<div className="card-body">
									<ul>
										<li>
											<Link to="#">Coats</Link>
										</li>
										<li>
											<Link to="#">Jackets</Link>
										</li>
										<li>
											<Link to="#">Dresses</Link>
										</li>
										<li>
											<Link to="#">Shirts</Link>
										</li>
										<li>
											<Link to="#">T-shirts</Link>
										</li>
										<li>
											<Link to="#">Jeans</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-heading">
								<Link data-toggle="collapse" data-target="#collapseFive">
									Cosmetic
								</Link>
							</div>
							<div
								id="collapseFive"
								className="collapse"
								data-parent="#accordionExample">
								<div className="card-body">
									<ul>
										<li>
											<Link to="#">Coats</Link>
										</li>
										<li>
											<Link to="#">Jackets</Link>
										</li>
										<li>
											<Link to="#">Dresses</Link>
										</li>
										<li>
											<Link to="#">Shirts</Link>
										</li>
										<li>
											<Link to="#">T-shirts</Link>
										</li>
										<li>
											<Link to="#">Jeans</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CategoryFilter;
