// create  public router

import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Singleshop from "../pages/SingleShop/Singleshop";


const publicRouter = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
	{
		path: "/shop/:id",
		element: <Singleshop />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
];


export default publicRouter;