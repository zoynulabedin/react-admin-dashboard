
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { loggedInUser } from './features/auth/authApiSlice';
import router from './router/router';

function App() {

	
const dispatch = useDispatch();

useEffect(() => {

		dispatch(loggedInUser());
	
		
	
	
}, [dispatch]);
  return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	);
}

export default App
