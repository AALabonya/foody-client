import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import SignUp from "../pages/Login/SignUp";
import AddProduct from "../components/AddProduct/AddProduct";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signUp",
                element:<SignUp/>
            },
            {
                path:"/addProduct",
                element:<AddProduct/>
            }
        ]
    }
])

export default Router;