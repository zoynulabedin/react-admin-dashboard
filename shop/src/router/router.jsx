// create browser rotuer

import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privateRouter from "./privateRouter";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [...publicRouter, ...privateRouter],
	},
]);

export default router;