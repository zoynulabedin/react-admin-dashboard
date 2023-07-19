
import { RouterProvider } from 'react-router-dom'
import './App.css'
  import { ToastContainer } from "react-toastify";
	import "react-toastify/dist/ReactToastify.css";
import router from './router/router'

function App() {


  return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	);
}

export default App
