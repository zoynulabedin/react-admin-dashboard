import Layout from "../components/Layout/Layout";
import { Profile } from "../pages/Profile/Profile";
import Users from "../pages/Users/Users";
import Brand from "../pages/brand/Brand";
import Dashboard from "../pages/dashboard/Dashboard";
import  Permission  from "../pages/permission/Permission";
import Roles from "../pages/roles/Roles";
import Tags from "../pages/tags/Tags";
import PrivateGuard from "./privateGurad";

// create private router
const privateRouter = [
	{
		element: <Layout />,
		children: [
			{
				element: <PrivateGuard />,
				children: [
					{
						path: "/",
						element: <Dashboard />,
					},
					{
						path: "/users",
						element: <Users />,
					},
					{
						path: "/profile",
						element: <Profile />,
					},
					{
						path: "/roles",
						element: <Roles />,
					},
					{
						path: "/brand",
						element: <Brand />,
					},
					{
						path: "/permission",
						element: <Permission />,
					},
					{
						path: "/tag",
						element: <Tags />,
					}
				],
			},
		],
	},
];



export default privateRouter;