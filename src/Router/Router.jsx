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
import UpdateTheFood from "../components/UpdateTheFood/UpdateTheFood";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/addProduct",
                element:<PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: "/availableFoods",
                element: <AvailableFood />
            },
            {
                path: "/food/:id",
                loader: ({ params }) => fetch(`https://assignment-11-server-site-project.vercel.app/getFood/${params.id}`, { credentials: "include" }),
                element: <SingleFoodDetails />
            },
            {
                path: "/manageMyFood",
                element:<PrivateRoute> <ManageMyFood/></PrivateRoute>
            },
            {
                path: "/myFoodRequest",
                element: <PrivateRoute><MyFoodRequest/></PrivateRoute>
            },
            {
                path: "/manageSingleFood/:id",
                element: <PrivateRoute><ManageSingleFood/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-site-project.vercel.app/requestFood/${params.id}`)

            },
            {
                path: "/updateManageFood/:_id",
                element:<PrivateRoute><UpdateTheFood /></PrivateRoute>,
                loader:({params})=> fetch(`https://assignment-11-server-site-project.vercel.app/getFoods/${params._id}`)
            }
        ]
    }
])

export default Router;