import React, { Suspense } from "react";
import Header from "./components/Header";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import AdminRoute  from "./Admin/AdminRoute";
import LoginRegister from "./page/LoginRegister";
import {createBrowserRouter} from "react-router-dom"
import Logout from "./page/Logout";



// const AdminRoute = React.lazy(()=>{ return import('./Admin/AdminRoute') })
import { Slider } from '.';

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
        element: <> <LoginRegister/></>
    },
    {
        path:"/register",
        element:<> <Header/><LoginRegister/></>
    },
    {
        path: "/logout",
        element: <><Logout /></>,
    },
    {
        path:"admin/*",
        element:<Suspense fallback={<h2>Loading...</h2>}><AdminRoute /></Suspense>,

    }
])

export default MAinRouter