import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Sidebar = () => {
	const location = useLocation();
	const {user} = useAuth();

	
  return (
		<>
			<div className="sidebar" id="sidebar">
				<div className="sidebar-inner slimscroll">
					<div id="sidebar-menu" className="sidebar-menu">
						<ul>
							<li className="menu-title">
								<span>Main</span>
							</li>
							{user?.role?.permissions.includes("dashboard") && (
								<li className={`${location.pathname === "/" ? "active" : ""}`}>
									<Link to="/">
										<i className="fe fe-home"></i> <span>Dashboard</span>
									</Link>
								</li>
							)}
							{user?.role?.permissions.includes("order") && (
								<li
									className={`${
										location.pathname === "/order" ? "active" : ""
									}`}>
									<Link to="/users">
										<i className="fe fe-users"></i> <span>Order</span>
									</Link>
								</li>
							)}
							{user?.role?.permissions.includes("products") && (
								<li
									className={`${
										location.pathname === "/products" ? "active" : ""
									}`}>
									<Link to="/users">
										<i className="fe fe-users"></i> <span>Products</span>
									</Link>
								</li>
							)}
							{user?.role?.permissions.includes("category") && (
								<li
									className={`${
										location.pathname === "/category" ? "active" : ""
									}`}>
									<Link to="/users">
										<i className="fe fe-users"></i> <span>Category</span>
									</Link>
								</li>
							)}
							{user?.role?.permissions.includes("tags") && (
								<li>
									<Link to="/tag">
										<i className="fe fe-users"></i> <span>Tags</span>
									</Link>
								</li>
							)}
							{user?.role?.permissions.includes("brand") && (
								<li>
									<Link to="/brand">
										<i className="fe fe-users"></i> <span>Brand</span>
									</Link>
								</li>
							)}
							{user?.role?.permissions.includes("user") && (
								<li
									className={`${
										location.pathname === "/users" ? "active" : ""
									}`}>
									<Link to="/users">
										<i className="fe fe-users"></i> <span>User</span>
									</Link>
								</li>
							)}
							{user?.role?.permissions.includes("roles") && (
								<li
									className={`${
										location.pathname === "/roles" ? "active" : ""
									}`}>
									<Link to="/roles">
										<i className="fe fe-users"></i> <span>Roles</span>
									</Link>
								</li>
							)}
							{user?.role?.permissions.includes("permission") && (
								<li
									className={`${
										location.pathname === "/permission" ? "active" : ""
									}`}>
									<Link to="/permission">
										<i className="fe fe-users"></i> <span>Permission</span>
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar