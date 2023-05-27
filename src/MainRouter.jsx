import Header from "./components/Header";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import LoginRegister from "./page/LoginRegister";
import {createBrowserRouter} from "react-router-dom"

const MAinRouter = createBrowserRouter([
    {
        path:"/",
        element:<> <Header/> <Home/></>
    },
    {
        path:"/about",
        element: <> <Header/> <About/></>
    },
    {
        path:"/contact",
        element:<> <Header/> <Contact/></>
    },
    {
        path:"/login",
        element: <> <Header/> <LoginRegister/></>
    },
    {
        path:"/register",
        element:<> <Header/><LoginRegister/></>
    },
])

export default MAinRouter