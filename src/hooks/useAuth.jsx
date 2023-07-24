import { useSelector } from "react-redux";
import { getAuthData } from "../features/auth/authSlice";

 const useAuth = () => {
    const { user } = useSelector(getAuthData);
  return {user}
}

export default useAuth;