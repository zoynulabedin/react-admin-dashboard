import { Link } from "react-router-dom"
import thumb1 from "../../assets/img/product/details/thumb-1.jpg"
import thumb2 from "../../assets/img/product/details/thumb-2.jpg"
import thumb3 from "../../assets/img/product/details/thumb-3.jpg"
import thumb4 from "../../assets/img/product/details/thumb-4.jpg"
import product1 from "../../assets/img/product/details/product-1.jpg"
import product2 from "../../assets/img/product/details/product-2.jpg"
import product3 from "../../assets/img/product/details/product-3.jpg"
import product4 from "../../assets/img/product/details/product-4.jpg"
import Product from "../../components/Product/Product"
const Singleshop = () => {
  return (
		<section className="product-details spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="product__details__pic">
							<div className="product__details__pic__left product__thumb nice-scroll">
								<Link className="pt active" href="#product-1">
									<img src={thumb1} alt="" />
								</Link>
								<Link className="pt" href="#product-2">
									<img src={thumb2} alt="" />
								</Link>
								<Link className="pt" href="#product-3">
									<img src={thumb3} alt="" />
								</Link>
								<Link className="pt" href="#product-4">
									<img src={thumb4} alt="" />
								</Link>
							</div>
							<div className="product__details__slider__content">
								<div className="product__details__pic__slider owl-carousel">
									<img
										data-hash="product-1"
										className="product__big__img"
										src={product1}
										alt=""
									/>
									<img
										data-hash="product-2"
										className="product__big__img"
										src={product2}
										alt=""
									/>
									<img
										data-hash="product-3"
										className="product__big__img"
										src={product3}
										alt=""
									/>
									<img
										data-hash="product-4"
										className="product__big__img"
										src={product4}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="product__details__text">
							<h3>
								Essential structured blazer{" "}
								<span>Brand: SKMEIMore Men Watches from SKMEI</span>
							</h3>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<span>( 138 reviews )</span>
							</div>
							<div className="product__details__price">
								$ 75.0 <span>$ 83.0</span>
							</div>
							<p>
								Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret
								fugit, sed quia consequuntur magni lores eos qui ratione
								voluptatem sequi nesciunt.
							</p>
							<div className="product__details__button">
								<div className="quantity">
									<span>Quantity:</span>
									<div className="pro-qty">
										<input type="text" value="1" />
									</div>
								</div>
								<Link href="#" className="cart-btn">
									<span className="icon_bag_alt"></span> Add to cart
								</Link>
								<ul>
									<li>
										<Link href="#">
											<span className="icon_heart_alt"></span>
										</Link>
									</li>
									<li>
										<Link href="#">
											<span className="icon_adjust-horiz"></span>
										</Link>
									</li>
								</ul>
							</div>
							<div className="product__details__widget">
								<ul>
									<li>
										<span>Availability:</span>
										<div className="stock__checkbox">
											<label htmlFor="stockin">
												In Stock
												<input type="checkbox" id="stockin" />
												<span className="checkmark"></span>
											</label>
										</div>
									</li>
									<li>
										<span>Available color:</span>
										<div className="color__checkbox">
											<label htmlFor="red">
												<input
													type="radio"
													name="color__radio"
													id="red"
													checked
												/>
												<span className="checkmark"></span>
											</label>
											<label htmlFor="black">
												<input type="radio" name="color__radio" id="black" />
												<span className="checkmark black-bg"></span>
											</label>
											<label htmlFor="grey">
												<input type="radio" name="color__radio" id="grey" />
												<span className="checkmark grey-bg"></span>
											</label>
										</div>
									</li>
									<li>
										<span>Available size:</span>
										<div className="size__btn">
											<label htmlFor="xs-btn" className="active">
												<input type="radio" id="xs-btn" />
												xs
											</label>
											<label htmlFor="s-btn">
												<input type="radio" id="s-btn" />s
											</label>
											<label htmlFor="m-btn">
												<input type="radio" id="m-btn" />m
											</label>
											<label htmlFor="l-btn">
												<input type="radio" id="l-btn" />l
											</label>
										</div>
									</li>
									<li>
										<span>Promotions:</span>
										<p>Free shipping</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="product__details__tab">
							<ul className="nav nav-tabs" role="tablist">
								<li className="nav-item">
									<Link
										className="nav-link active"
										data-toggle="tab"
										href="#tabs-1"
										role="tab">
										Description
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										data-toggle="tab"
										href="#tabs-2"
										role="tab">
										Specification
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										data-toggle="tab"
										href="#tabs-3"
										role="tab">
										Reviews ( 2 )
									</Link>
								</li>
							</ul>
							<div className="tab-content">
								<div className="tab-pane active" id="tabs-1" role="tabpanel">
									<h6>Description</h6>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut loret fugit, sed quia consequuntur magni dolores
										eos qui ratione voluptatem sequi nesciunt loret. Neque porro
										lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo
										enim ipsam voluptatem quia voluptas sit aspernatur aut odit
										aut loret fugit, sed quia ipsu consequuntur magni dolores
										eos qui ratione voluptatem sequi nesciunt. Nulla consequat
										massa quis enim.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
										Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
										natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus. Donec quam felis, ultricies nec, pellentesque
										eu, pretium quis, sem.
									</p>
								</div>
								<div className="tab-pane" id="tabs-2" role="tabpanel">
									<h6>Specification</h6>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut loret fugit, sed quia consequuntur magni dolores
										eos qui ratione voluptatem sequi nesciunt loret. Neque porro
										lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo
										enim ipsam voluptatem quia voluptas sit aspernatur aut odit
										aut loret fugit, sed quia ipsu consequuntur magni dolores
										eos qui ratione voluptatem sequi nesciunt. Nulla consequat
										massa quis enim.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
										Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
										natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus. Donec quam felis, ultricies nec, pellentesque
										eu, pretium quis, sem.
									</p>
								</div>
								<div className="tab-pane" id="tabs-3" role="tabpanel">
									<h6>Reviews ( 2 )</h6>
									<p>
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
										odit aut loret fugit, sed quia consequuntur magni dolores
										eos qui ratione voluptatem sequi nesciunt loret. Neque porro
										lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo
										enim ipsam voluptatem quia voluptas sit aspernatur aut odit
										aut loret fugit, sed quia ipsu consequuntur magni dolores
										eos qui ratione voluptatem sequi nesciunt. Nulla consequat
										massa quis enim.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
										Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
										natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus. Donec quam felis, ultricies nec, pellentesque
										eu, pretium quis, sem.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="related__title">
							<h5>RELATED PRODUCTS</h5>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<Product />
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<Product />
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<Product />
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<Product />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Singleshop