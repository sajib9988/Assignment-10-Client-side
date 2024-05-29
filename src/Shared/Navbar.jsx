import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/logo.jpg'; // Adjust the path as needed


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addcraftitem" activeClassName="active">
              Add Craft Item
            </NavLink>
          </li>
          <li>
            <NavLink to="/mycrafts" activeClassName="active">
              My Art & Craft List
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/allartcraft" activeClassName="active">
          All Art Craft Item
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 container mx-auto  mt-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        {/* <h1 className="text-3xl text-green-700 font-bold">
          Art & Craft<span className="text-blue-800">s</span>tate
        </h1> */}
        <img className="w-[60px] h-[60px] rounded-full" src={logo} alt="" />
      </div>
      <div className="navbar-center font-bold hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User Profile"
                title={user.displayName}
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
