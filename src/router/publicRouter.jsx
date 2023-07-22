// create  public router

import { Forgot } from "../pages/auth/Forgot";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PublicGurad from "./publicGurad";

const publicRouter = [
	{
		element: <PublicGurad />,
		children: [
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
		],
	},
];


export default publicRouter;