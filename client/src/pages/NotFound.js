import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assest/NotFoundImage.gif'
import Footer from '../components/Footer/Footer';
const NotFound = () => {
    return (
        <>

        <div className='mx-auto mt-14 md:px-8 max-w-screen-2xl max-h-[100vh] flex flex-col '>
            <div className='text-center text-2xl sm:text-3xl md:text-4xl mt-16 text-purple-500 font-bold mb-4'>
                PAGE NOT FOUND !

            </div>
           
            <div className='w-[100%] sm:[w-500px] lg:h-[400px]'>
                <img className='w-full  h-full object-contain' src={NotFoundImage} alt='notfound-img'></img>
            </div>
            <div className='flex items-center justify-center pb-8'>
            <Link to="/" className='block  auth-link text-gray-600 sm:text-xl md:text-2xl'>
                Back To Home Page
                </Link>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default NotFound;