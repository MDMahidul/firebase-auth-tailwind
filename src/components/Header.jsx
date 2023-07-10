import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import flogo from '/flogo.svg';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = ()=>{
    logOut()
      .then(()=>{})
      .catch(error=>console.log(error))
  }

    return (
      <div>
        <div className="navbar bg-rose-400 text-white flex justify-between py-2">
         <div >
            <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-12' src={flogo} alt="" /></Link>
              <Link className="btn btn-ghost normal-case text-xl" to="/">
                Home
              </Link>
              <Link className="btn btn-ghost normal-case text-xl" to="/login">
                Login
              </Link>
              <Link className="btn btn-ghost normal-case text-xl" to="/register">
                Register
              </Link>
              <Link className="btn btn-ghost normal-case text-xl" to="/orders">
                Orders
              </Link>
         </div>
         <div className='me-4'>
          {user && (
              <Link className="btn btn-ghost normal-case text-xl" to="/profile">
                Profile
              </Link>
            )}
            {user ? (
              <>
                <span>{user.email}</span>{" "}
                <button onClick={handleLogout} className="btn btn-xs ms-4">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
         </div>
        </div>
      </div>
    );
};

export default Header;