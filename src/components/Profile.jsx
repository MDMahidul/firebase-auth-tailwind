import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 className='text-center my-20 text-3xl font-bold'>Your Profile</h2>
            <h2 className='text-center my-20 text-2xl font-bold'>Your Email:{user.email} </h2>
        </div>
    );
};

export default Profile;