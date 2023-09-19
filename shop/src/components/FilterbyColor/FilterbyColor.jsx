import "./FilterbyColor.scss";
const FilterbyColor = () => {
	return (
		<div className="sidebar__color">
			<div className="section-title">
				<h4>Shop by size</h4>
			</div>
			<div className="size__list color__list">
				<label htmlFor="black">
					Blacks
					<input type="checkbox" id="black" />
					<span className="checkmark"></span>
				</label>
				<label htmlFor="whites">
					Whites
					<input type="checkbox" id="whites" />
					<span className="checkmark"></span>
				</label>
				<label htmlFor="reds">
					Reds
					<input type="checkbox" id="reds" />
					<span className="checkmark"></span>
				</label>
				<label htmlFor="greys">
					Greys
					<input type="checkbox" id="greys" />
					<span className="checkmark"></span>
				</label>
				<label htmlFor="blues">
					Blues
					<input type="checkbox" id="blues" />
					<span className="checkmark"></span>
				</label>
				<label htmlFor="beige">
					Beige Tones
					<input type="checkbox" id="beige" />
					<span className="checkmark"></span>
				</label>
				<label htmlFor="greens">
					Greens
					<input type="checkbox" id="greens" />
					<span className="checkmark"></span>
				</label>
				<label htmlFor="yellows">
					Yellows
					<input type="checkbox" id="yellows" />
					<span className="checkmark"></span>
				</label>
			</div>
		</div>
	);
};

export default FilterbyColor;
