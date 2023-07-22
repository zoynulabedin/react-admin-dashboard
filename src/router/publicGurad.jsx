import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicGurad = () => {
	const { user } = useSelector((state) => state.auth);

    
    return user ? <Navigate to="/" /> : <Outlet />;
   
 
		
};

export default PublicGurad;
