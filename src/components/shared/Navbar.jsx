
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }
  const navLinks = <>

    <li className="rounded-lg"> <NavLink to="/">Home</NavLink></li>
    <li className=" rounded-lg"> <NavLink to="/availableFoods">Available Foods</NavLink></li>
    <li className=" rounded-lg"> <NavLink to="/addProduct">Add Food</NavLink></li>
    <li className=" rounded-lg"> <NavLink to="/manageMyFood">Manage My Foods</NavLink></li>
    <li className=" rounded-lg"> <NavLink to="/myCart">My Food Request</NavLink></li>

  </>
  return (
    <div className="">
      <div className="">
      <div className="flex ">
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn px-1 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-7" fill="none" viewBox="0 0 28 28" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="dropdown-content lg:mt-3 z-[100] lg:p-2 shadow bg-base-200 rounded-box w-36">
                {navLinks}
              </ul>
            </div>
            <div>
              <Link className="bg-transparent"><img src="https://i.ibb.co/Sv1Pkzg/OIP.jpg" alt="" className=" w-14 lg:w-24 md:w-16 rounded-xl" /></Link>
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
                <Link to="/login" className="btn font-bold">Login</Link>
            }

          </div>

        </div>
      </div>
    </div>
    
    </div>

  );




};

export default Navbar;