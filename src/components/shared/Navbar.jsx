
import { Link, NavLink } from "react-router-dom";

import useAuth from "../../hooks/useAuth";


const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }
  const navLinks = <>

    <li className="bg-cyan-900 text-white rounded-lg"> <NavLink to="/">Home</NavLink></li>
    <li className="bg-cyan-900 text-white rounded-lg"> <NavLink to="/availableFoods">Available Foods</NavLink></li>
    <li className="bg-cyan-900 text-white rounded-lg"> <NavLink to="/addProduct">Add Food</NavLink></li>
    <li className="bg-cyan-900 text-white rounded-lg"> <NavLink to="/register">Manage My Foods</NavLink></li>
    <li className="bg-cyan-900 text-white rounded-lg"> <NavLink to="/myCart">My Food Request</NavLink></li>

  </>
  return (
    <div className="">
      <div className="">
      <div className="flex ">
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn px-1 bg-pink-600 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 28 28" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="dropdown-content lg:mt-3 z-[100] lg:p-2 shadow bg-pink-500 rounded-box w-36">
                {navLinks}
              </ul>
            </div>
            <div>
              <Link className="bg-transparent"><img src="https://i.ibb.co/PMv3dGj/Share-the-Meal-Logo-with-Name-620x441.jpg" alt="" className=" w-8 lg:w-24 md:w-10 rounded-xl ml-7 mt-3" /></Link>
            </div>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 lg:gap-2 lg:text-lg font-bold">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {
               user ? <>
               <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar"><div className="w-10 rounded-full"><img src={user.photoURL} alt="" /></div></label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-40">
              <button onClick={handleSignOut} >
              <li><p>{user?.displayName}</p></li>
              <li><a>LogOut</a></li>
              </button>
            </ul>
          </div>
            </>


                :
                <Link to="/login" className="btn font-bold bg-cyan-900 text-white">Login</Link>
            }

          </div>

        </div>
      </div>
    </div>
    </div>

  );




};

export default Navbar;