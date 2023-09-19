import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Instagram from "../components/Instagram/Instagram";


const Layout = () => {
  return (
		<>
			<Header />
			<Breadcrumb />
			<Outlet />
			<Instagram/>
			<Footer />
		</>
	);
}

export default Layout