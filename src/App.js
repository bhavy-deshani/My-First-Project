import logo from './logo.svg';
import './App.css';
import MainRouter from "./MainRouter"
import {RouterProvider} from "react-router-dom"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return <RouterProvider router={MainRouter} />
}

export default App;
