import Layout from "../components/Layout/Layout";
import Users from "../pages/Users/Users";
import Dashboard from "../pages/dashboard/Dashboard";

// create private router
const privateRouter = [
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
            {
                path: "/users",
                element: <Users />,
            }
		],
	},
];



export default privateRouter;