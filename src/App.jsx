
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { loggedInUser } from './features/auth/authApiSlice';
import router from './router/router';
import { getAllRole, getPermission } from './features/user/userApiSlice';

function App() {

	
const dispatch = useDispatch();

useEffect(() => {

		dispatch(loggedInUser());
	
}, [dispatch]);

	useEffect(() => {
		dispatch(getPermission());
		dispatch(getAllRole());
	}, [dispatch]);

  return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	);
}

export default App
