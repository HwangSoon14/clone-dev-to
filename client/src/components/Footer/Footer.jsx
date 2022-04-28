import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="w-full px-6 py-6 sm:px-10 sm:py-8 bg-[#e5e5e5]">
			<div className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[18px] sm:leading-9 md:mx-16 lg:mx-56 font-thin text-center">
				<Link to="/" className="auth-link inline-block text-main-color mr-2"> 
					DEV Community
				</Link>
				— A constructive and inclusive social network for software developers. With you every step of your journey.
			</div>
			<div className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[18px] sm:leading-9 md:mx-18 lg:mx-64 font-thin text-center">
				Built on
				<Link to="/" className="auth-link inline-block text-main-color mx-2">
					Forem
				</Link>
				— the{' '}
				<Link to="/" className="auth-link inline-block text-main-color mr-2">
					open source
				</Link>
				software that powers
				<Link to="/" className="auth-link inline-block text-main-color mx-2">
					DEV
				</Link>
				and other inclusive communities.Made with love and{' '}
				<Link to="/" className="auth-link inline-block text-main-color mr-2">
					Ruby on rails
				</Link>
				DEV Community © 2016 - 2022.
			</div>

			<div className="flex items-center justify-center mt-2">
				<a href="/#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						role="img"
						aria-labelledby="ar1dxd6aiupa6rghmqahijbyhv4v4xtq"
						className="crayons-icon crayons-icon--default c-link__icon"
					>
						<title id="ar1dxd6aiupa6rghmqahijbyhv4v4xtq">Forem logo</title>
						<g clipPath="url(#clip0)" fill="#1AB3A6">
							<path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
						</g>
						<defs>
							<clipPath id="clip0">
								<path fill="#fff" d="M0 0h24v24H0z"></path>
							</clipPath>
						</defs>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Footer;
