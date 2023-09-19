import CategoryFilter from "../CategoryFilter/CategoryFilter";
import FilterbyColor from "../FilterbyColor/FilterbyColor";
import PriceFilter from "../PriceFilter/PriceFilter";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
		<div className="shop__sidebar">
			<CategoryFilter />
			<FilterbyColor />
			<PriceFilter />
		</div>
	);
}

export default Sidebar