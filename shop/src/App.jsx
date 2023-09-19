
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import "fontawesome-4.7";
function App() {


  return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App
