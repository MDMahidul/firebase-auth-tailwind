import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import './All.css';
import dayjs from 'dayjs';
import Lottie from 'react-lottie';
import firebase from '../assets/firebase.json';
import auth from '/firebase-auth.webp';
import store from '/firebase-store.webp';
import hosting from '/firebase-hosting.webp';

const Home = () => {
  const user = useContext(AuthContext);
  const [currentTime, setCurrentTime] = useState('');
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: firebase,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  

  useEffect(() => {
    const timer = setInterval(() => {
        const date = new Date();
        const options = {timeZone: 'Asia/Dhaka'};
        const updatedTime = date.toLocaleTimeString('en-US',options);
     /*  const updatedTime = dayjs().format('HH:mm:ss'); */
      setCurrentTime(updatedTime);
      /* console.log(currentTime); */
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentTime]);

  return (
    <div>
      <main className="container mx-auto py-8 min-h-screen neg-margin">
        <section className="text-center">
          <div className='w-48 mx-auto my-[-30px]'>
             <Lottie options={lottieOptions}/>
          </div> 
          <h1 className="text-5xl font-bold mb-4 text-green-400">Welcome to Firebase Auth </h1>
          <p className="text-green-400">This is just a testing website for firebase Auth testing.</p>
        </section>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white shadow rounded-lg px-4 py-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Firebase Authentication</h2>
            <img className='w-36 mx-auto py-4' src={auth} alt="" />
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white shadow rounded-lg px-4 py-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Firebase Cloud Store</h2>
            <img className='w-36 mx-auto py-4' src={store} alt="" />
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white shadow rounded-lg px-4 py-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Firebase Hosting</h2>
            <img className='w-36 mx-auto py-4' src={hosting} alt="" />
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
        </section>
          <div className='text-center mt-10'>
            <span className=" font-bold">
              <span className="text-6xl text-green-400">{currentTime}</span>
            </span>
          </div>
      </main>
    </div>
  );
};

export default Home;
