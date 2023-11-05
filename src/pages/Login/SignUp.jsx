
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [errorHandle, setErrorHandle] = useState("")

    const { createUser, logOut, updateUser } = useAuth()

    const navigate = useNavigate()


    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const image = event.target.img.value
        const email = event.target.email.value
        const password = event.target.password.value


        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            setErrorHandle("Password should be 6 character minimum with a number, an uppercase and a special character");
            return
        } else {
            createUser(email, password)
                .then((result) => {

                    toast.success('Successfully!')
                    if (result.user) {
                        updateUser({
                            displayName: name,
                            photoURL: image
                        })
                    }
                    navigate("/login")
                    logOut()
                })

        }
        event.target.reset()


    }

    return (
        <div>
            {/* style={{ backgroundImage: 'url(https://i.ibb.co/X4CVCRZ/fashion1.webp)' }} */}
            <div className="hero min-h-screen" >
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className="flex justify-center">

                            <div className="w-full max-w-sm  bg-transparent border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <form onSubmit={handleRegister} className="space-y-6">
                                    <h5 className="text-2xl font-bold text-center bg-pink-600 rounded-lg py-4 w-full text-white dark:text-white">Create an Account</h5>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your Name</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Photo Url</label>
                                        <input type="text" placeholder="Photo url" name='img' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                            </div>
                                            <label
                                                className="mt-px cursor-pointer select-none font-light text-gray-700"
                                            >
                                                <p className="flex items-center font-sans text-sm font-normal leading-normal text-white antialiased ml-1">
                                                    Terms and Conditions
                                                </p>
                                            </label>
                                        </div>
                                        <a href="#" className="text-sm text-white hover:underline dark:text-blue-500 ml-12">Forget Password?</a>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-900 focus:ring-4 focus:outline-none rounded-lg py-2">Register</button>
                                    <div className="text-sm font-medium text-white dark:text-gray-300">
                                        Have an account?  Please <Link to="/login" className="text-pink-600 font-bold text-xl hover:underline dark:text-white">Login</Link>
                                    </div>
                                </form>
                                {
                                    errorHandle && <p className="text-white font-bold">{errorHandle}</p>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;