import "./Breadcrumb.scss";
const Breadcrumb = () => {
  return (
		<div className="breadcrumb-option">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcrumb__links">
							<a href="./index.html">
								<i className="fa fa-home"></i> Home
							</a>
							<span>Shop</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Breadcrumb