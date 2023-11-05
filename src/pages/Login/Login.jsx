import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location =useLocation()
    const handleSubmit = async (e) => {
      e.preventDefault();
      const toastId = toast.loading('Logging in ...');
  
      try {
        await signIn(email, password);
        toast.success('Logged in', { id: toastId });
        navigate(location?.state ? location.state : "/")
      } catch (error) {
        toast.error(error.message, { id: toastId });
      }
    };
  
    const handleGoogleLogin = async () => {
      const toastId = toast.loading('Logging in ...');
  
      try {
        await googleSignIn(email, password)
        .then(()=>{
            toast.success('Logged in', { id: toastId });
            navigate(location?.state ? location.state : "/")
        });
        
      } catch (error) {
        toast.error(error.message, { id: toastId });
      }
    };
    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-center">
           
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <h1 className="text-center font-bold bg-zinc-500 p-10 text-white text-2xl rounded-md">SignUp</h1>
          <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                onBlur={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-center text-sm">
            Have an account?  Please{' '}
              <NavLink
                to="/signUp"
                className="text-red-700 font-bold hover:underline cursor-pointer "
              >
                Sign Up
              </NavLink>
            </p>
            <div className="form-control mt-2">
              <button type="submit" className="btn bg-zinc-500 text-white font-bold">
                Login
              </button>
            </div>
            <div className="divider ">Or</div>
            <div className="divider ">Continue With</div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline font-bold  w-full flex justify-between items-center "
            >
              Google
              <FcGoogle className="w-8 h-8" />
            </button>
          </form>
        </div>
      </div>
    );
};

export default Login;