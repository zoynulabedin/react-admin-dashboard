// create  public router

import { Forgot } from "../pages/auth/Forgot";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const publicRouter = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/forgot",
		element: <Forgot />,
	},
];


export default publicRouter;