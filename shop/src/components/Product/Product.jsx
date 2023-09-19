import { AiFillStar, AiOutlineExpandAlt, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import productImg from "../../assets/img/shop/shop-7.jpg";
import "./Product.scss";
const Product = () => {
	return (
		<div className="product__item">
			<div
				className="product__item__pic set-bg"
				style={{ backgroundImage: `url(${productImg})` }}
				data-setbg={productImg}>
				<ul className="product__hover">
					<li>
						<Link to={productImg} className="image-popup">
							<span className="arrow_expand">
								<AiOutlineExpandAlt />
							</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span className="icon_heart_alt">
								<AiOutlineHeart />
							</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span className="icon_bag_alt">
								<BsBag />
							</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="product__item__text">
				<h6>
					<Link to="/shop/1234">Circular pendant earrings</Link>
				</h6>
				<div className="rating">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<div className="product__price">$ 59.0</div>
			</div>
		</div>
	);
};

export default Product;
