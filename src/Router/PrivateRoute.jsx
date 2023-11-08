/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location =useLocation()
 
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
     
    if(user){
        return children;
    }
     
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;