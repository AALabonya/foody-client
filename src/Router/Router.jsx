import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import SignUp from "../pages/Login/SignUp";
import AddProduct from "../components/AddProduct/AddProduct";
import AvailableFood from "../components/AvailableFood/AvailableFood";
import SingleFoodDetails from "../components/SingleFoodDetails/SingleFoodDetails";
import ManageMyFood from "../components/ManageMyFood/ManageMyFood";
import MyFoodRequest from "../components/MyFoodRequest/MyFoodRequest";
import ManageSingleFood from "../components/ManageSingleFood/ManageSingleFood";


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
            },
            {
                path:"/availableFoods",
                element:<AvailableFood/>
            },
            {
                path:"/food/:id",
                loader:({params}) => fetch(`http://localhost:5000/getFood/${params.id}` ,{credentials: "include"}),
                element:<SingleFoodDetails/>
            },
            {
                path:"/manageMyFood",
                element:<ManageMyFood/>
            },
            {
                path:"/myFoodRequest",
                element:<MyFoodRequest/>
            },
            {
                path:"/manageSingleFood/:id",
                element:<ManageSingleFood/>,
                loader:({params})=> fetch(`http://localhost:5000/requestFood/${params.id}`)
              
            }
        ]
    }
])

export default Router;