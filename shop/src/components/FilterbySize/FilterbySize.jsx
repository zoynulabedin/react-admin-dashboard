import "./FitlerbySize.scss";

const FilterbySize = () => {
  return (
     <div className="sidebar__sizes">
                            <div className="section-title">
                                <h4>Shop by size</h4>
                            </div>
                            <div className="size__list">
                                <label htmlFor="xxs">
                                    xxs
                                    <input type="checkbox" id="xxs" />
                                    <span className="checkmark"></span>
                                </label>
                                <label htmlFor="xs">
                                    xs
                                    <input type="checkbox" id="xs" />
                                    <span className="checkmark"></span>
                                </label>
                                <label htmlFor="xss">
                                    xs-s
                                    <input type="checkbox" id="xss" />
                                    <span className="checkmark"></span>
                                </label>
                                <label htmlFor="s">
                                    s
                                    <input type="checkbox" id="s" />
                                    <span className="checkmark"></span>
                                </label>
                                <label htmlFor="m">
                                    m
                                    <input type="checkbox" id="m" />
                                    <span className="checkmark"></span>
                                </label>
                                <label htmlFor="ml">
                                    m-l
                                    <input type="checkbox" id="ml" />
                                    <span className="checkmark"></span>
                                </label>
                                <label htmlFor="l">
                                    l
                                    <input type="checkbox" id="l" />
                                    <span className="checkmark"></span>
                                </label>
                                <label htmlFor="xl">
                                    xl
                                    <input type="checkbox" id="xl" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
  )
}

export default FilterbySize