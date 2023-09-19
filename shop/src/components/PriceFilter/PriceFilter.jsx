import { Link } from "react-router-dom";

const PriceFilter = () => {
	return (
		<>
			<div className="sidebar__filter">
				<div className="section-title">
					<h4>Shop by price</h4>
				</div>
				<div className="filter-range-wrap">
					<div
						className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
						data-min="33"
						data-max="99"></div>
					<div className="range-slider">
						<div className="price-input">
							<p>Price:</p>
							<input type="text" id="minamount" />
							<input type="text" id="maxamount" />
						</div>
					</div>
				</div>
				<Link href="#">Filter</Link>
			</div>
		</>
	);
};

export default PriceFilter;
