import Layout from "../components/Layout/Layout";
import Users from "../pages/Users/Users";
import Dashboard from "../pages/dashboard/Dashboard";
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
				],
			},
		],
	},
];



export default privateRouter;