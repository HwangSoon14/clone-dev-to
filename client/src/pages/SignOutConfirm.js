import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../app/authSlice';
import FooterLayout from '../components/Layout/FooterLayout';

const SignOutConfirm = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout())
        navigate('/sign-in')
    }

    return (
       <FooterLayout>
            <div className='container mx-auto mt-14 h-[55vh] bg-white-smoke'>
                <div className='px-2 py-4 w-full h-full flex items-center justify-center flex-col'>
                    <h3 className='text-2xl font-semibold text-center max-w-[90%] mb-4'>Are you sure you want to sign out?</h3>
                    <button onClick={handleLogout} className='px-3 py-4 rounded-lg bg-main-color text-white font-semibold text-sm hover:bg-purple-600 transition-all'>Yes, Sign Out</button>
                </div>
        </div>
       </FooterLayout>
    );
};

export default SignOutConfirm;