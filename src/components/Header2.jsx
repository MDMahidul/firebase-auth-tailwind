import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import flogo from '/flogo.svg';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-rose-400 my-[-8px]">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow  rounded-box w-80 bg-rose-400 text-white">
                <li><Link className="btn btn-ghost normal-case text-xl" to="/">Home </Link></li>
                    {!user && <>
                        <li> <Link className="btn btn-ghost normal-case text-xl" to="/login"> Login </Link> </li>
                        <li> <Link className="btn btn-ghost normal-case text-xl" to="/register"> Register </Link> </li>
                        </>
                    }
                    <li><Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders </Link></li>
                    {user && (
                        <li><Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile </Link></li>
                    )}
                    {user ? (
                        <>
                        <li className='mx-auto'><span className="text-base sm:inline">user: {user.email}</span></li>{" "}
                        <Link
                            onClick={handleLogout}
                            className="btn text-white text-xl bg-rose-400 hover:bg-rose-600"
                        >
                            Sign Out
                        </Link>
                        </>
                    ) : (
                        ''
                    )}
                </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl hidden lg:flex" to="/">
                    <img className="w-12" src={flogo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="btn btn-ghost normal-case text-xl" to="/">Home </Link></li>
                    {!user && <>
                        <li> <Link className="btn btn-ghost normal-case text-xl" to="/login"> Login </Link> </li>
                        <li> <Link className="btn btn-ghost normal-case text-xl" to="/register"> Register </Link> </li>
                        </>
                    }
                    <li><Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders </Link></li>
                    {user && (
                        <li><Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile </Link></li>
                    )}
                </ul>
            </div>
            <div className="navbar-end text-white">
                <Link className='lg:hidden'><img className='w-12' src={flogo} alt="" /></Link>
                <div className='hidden lg:flex'>
                    {user ? (
                        <>
                        <span className="hidden sm:inline">user: {user.email}</span>{" "}
                        <Link
                            onClick={handleLogout}
                            className="btn bg-rose-400 text-white hover:bg-rose-600 btn-xs ms-4"
                        >
                            Sign Out
                        </Link>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
      </div>
    </div>
  );
};

export default Header;
