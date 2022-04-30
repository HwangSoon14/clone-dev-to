<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authApi from '../api/authApi';
import { logout } from '../app/authSlice';
import FooterLayout from '../components/Layout/FooterLayout';
import Loading from '../components/Loading/Loading';
const SignOutConfirm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const handleLogout = async () => {
		setIsLoading(true);
		try {
			const message = await authApi.log_out();
			dispatch(logout());
			navigate('/sign-in');
			setIsLoading(false);
		} catch (error) {
			
			setIsLoading(false);
		}
	};

	return (
		<FooterLayout>
			<div className="container mx-auto mt-14 h-[55vh] bg-white-smoke">
				<div className="px-2 py-4 w-full h-full flex items-center justify-center flex-col">
					<h3 className="text-2xl font-semibold text-center max-w-[90%] mb-4">Are you sure you want to sign out?</h3>
					<button
						onClick={handleLogout}
						className="px-3 py-4 rounded-lg bg-main-color text-white font-semibold text-sm hover:bg-purple-600 transition-all"
					>
						Yes, Sign Out
					</button>
				</div>
			</div>
			{isLoading && <Loading />}
		</FooterLayout>
	);
};

export default SignOutConfirm;
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
