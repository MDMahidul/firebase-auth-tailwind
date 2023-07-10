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
      <div className="navbar bg-rose-400 text-white flex flex-wrap justify-between py-2">
        <div className="navbar-start flex items-center space-x-4">
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            <img className="w-12" src={flogo} alt="" />
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </Link>
          {!user && (
            <>
              <Link className="btn btn-ghost normal-case text-xl" to="/login">
                Login
              </Link>
              <Link className="btn btn-ghost normal-case text-xl" to="/register">
                Register
              </Link>
            </>
          )}
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            Orders
          </Link>
          {user && (
            <Link className="btn btn-ghost normal-case text-xl" to="/profile">
              Profile
            </Link>
          )}
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className="hidden sm:inline">{user.email}</span>{" "}
              <button
                onClick={handleLogout}
                className="btn btn-xs ms-4"
              >
                Sign Out
              </button>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
