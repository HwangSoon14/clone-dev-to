import React from 'react';
import { Link } from 'react-router-dom';

const AuthModal = ({setVisible}) => {


	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 md:bg-black/60">
			<div className="w-full h-full bg-white md:w-[650px] md:h-[350px] md:rounded-lg md:px-4">
				<div className="flex items-center justify-between  border-b-2 border-gray-200 px-2 py-4">
					<span className="inline-block font-semibold tracking-wider text-lg">Login to continue</span>
					<button onClick={() => setVisible(false)}>
						<svg
							className="w-6 h-6 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
                <div className=''>
                    <img className='block ml-4 mt-4 w-[45px] h-[45px] md:w-[70px] md:h-[70px] rounded-lg rotate-am25 object-contain' alt='dev-logo' src='https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png'></img>
                </div>
                <p className='mt-6 px-4 text-gray-600 text-[14px] leading-6 tracking-wider'>
          We're a place where coders share, stay up-to-date and grow their careers.
      </p>

                <Link to="/sign-in" className='main-btn  text-center block max-w-[80%] mx-auto mt-4 mb-2 bg-main-color text-white'>
                    <button >Log in</button>
                </Link>
                <Link to='/sign-up' className='secondary-btn block text-center max-w-[80%] mx-auto'>
                <button >Create account</button>

           
                </Link>
			</div>
		</div>
	);
};

export default AuthModal;
