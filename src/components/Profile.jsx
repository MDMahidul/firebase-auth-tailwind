import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import './All.css';
import ava from '/ava.png';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="min-h-screen py-20 neg-margin">
                <div className=" text-center">
                    <div className=""> 
                        <h1 className="text-5xl font-bold text-green-400">Welcome to Firebase Auth</h1>
                        <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="avatar my-10">
                            <div className="w-24  rounded-full ring  ring-rose-400">
                                <img  src={ava} />
                            </div>
                        </div>
                        <h2 className='text-center mb-5 text-2xl font-bold'>Your Email: <span className='text-green-400'>{user.email}</span> </h2> 
                        <button className="btn bg-rose-400 text-white hover:bg-rose-600">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;