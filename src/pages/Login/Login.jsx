/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)

    const [showLogInError, setShowLogInError] = useState("")

    const location = useLocation()
    const navigate = useNavigate()

    const handleLoginForm = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                if (result.user) {
                    return (
                        Swal.fire({
                            title: "Good job!",
                            text: "You clicked the button!",
                            icon: "success"
                        })



                        // swal("Good job!", "Login Successful!", "success"
                        // ) && navigate(location?.state ? location.state : "/")
                    )
                }
            })
            .catch(() => {
                setShowLogInError("Invalid Email or Password")
            })

        event.target.reset()
    }

    const handleGoogle = e => {
        e.preventDefault()

        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                })
                // swal("Good job!", "Google login Successful!!", "success");
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Helmet><title>Foody |Login</title></Helmet>
            
               
                        <div className=" mt-5 flex justify-center">

                            <div className="w-full bg-transparent border border-gray-200 rounded-lg shadow sm:p-6 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                                <form onSubmit={handleLoginForm} className="space-y-6 max-w-2xl mx-auto">
                                    <h5 className="text-2xl font-bold text-center bg-cyan-800 rounded-lg py-2 md:py-4 lg:py-4 w-full text-white dark:text-white">SignIn</h5>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>

                                    <button type="submit" className="w-full text-white bg-cyan-800  hover:bg-cyan-800  focus:ring-4 focus:outline-none rounded-lg py-2">Login</button>
                                    <div className="text-sm text-center font-bold dark:text-gray-300 ">
                                        New here?  Please <Link to="/signUp" className="text-pink-700 text-lg hover:underline dark:text-blue-500 ">SignUp</Link>

                                    </div>
                                    <Link> <p className="text-center mt-5 text-white"><button onClick={handleGoogle} className="btn border-blue-500 font-bold bg-cyan-800 text-white "><FaGoogle className="text-white"></FaGoogle> Login with Google</button></p></Link>

                                </form>
                                {
                                    showLogInError && <p className="text-white font-bold">{showLogInError}</p>
                                }
                            </div>

                        </div>
               </div>






       
    );
};

export default Login;