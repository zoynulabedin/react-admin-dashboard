
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar/Sidebar";


const Shop = () => {
  return (
		<>
			<section className="shop spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<Sidebar />
						</div>
						<div className="col-lg-9 col-md-9">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<Product />
								</div>
								<div className="col-lg-4 col-md-6">
									<Product />
								</div>
								<div className="col-lg-4 col-md-6">
									<Product />
								</div>
								<div className="col-lg-4 col-md-6">
									<Product />
								</div>
								<div className="col-lg-4 col-md-6">
									<Product />
								</div>
								<div className="col-lg-4 col-md-6">
									<Product />
								</div>
								<div className="col-lg-4 col-md-6">
									<Product />
								</div>
								<div className="col-lg-4 col-md-6">
									<Product />
								</div>
								<div className="col-lg-12 text-center">
									<div className="pagination__option">
										<a href="#">1</a>
										<a href="#">2</a>
										<a href="#">3</a>
										<a href="#">
											<i className="fa fa-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Shop