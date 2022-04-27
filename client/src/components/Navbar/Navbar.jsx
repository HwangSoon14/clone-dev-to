import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/authSlice';
import Logo from '../../assest/logo.png';
import Sidebar from '../Sidebar/Sidebar';
import { AppRoutes } from '../../routing/AppRoutes';
const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [isShowAuthMenu, setIsShowAuthMenu] = useState(false);
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const user = useSelector((state) => state.auth.current_user);
	const handleToggleSidebar = () => {
		setShowSidebar((prev) => !prev);
	};
	const toggleAuthMenu = () => {
		setIsShowAuthMenu((prev) => !prev);
	};

	const handleLogout = () => {
		dispatch(logout());
		navigate("/sign-in");
	};

	const renderAuth = () => (
		<div className="flex items-center justify-center">
			<div className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] border-2 border-gray-300  rounded-full overflow-hidden">
				<button onClick={toggleAuthMenu}>
					<img src={user.avatar} alt="avatar" className="w-full h-full object-contain  rounded-full"></img>
				</button>
			</div>

			{isShowAuthMenu && (
				<div className="absolute w-[100%] h-auto sm:w-[300px] sm:right-0 right-0 top-[50px]  left-0 sm:left-auto z-50 text-black drop-shadow-sm">
					<div className="w-[96%] h-full px-2 animate-scrollDown gay-y-2 bg-white mx-auto border-2 rounded-lg border-gray-200">
						<div className="w-full pl-4 py-3 border-b-2 my-2 border-gray-200 hover:bg-purple-100 rounded-md hover:underline">
							<span className="block font-bold">{user.userName}</span>
							<span className="block text-gray-500 text-sm">@{user.userName}</span>
						</div>
						<div className="auth-menu-link">
							<Link to="/dashboard">Dashboard</Link>
						</div>
						<div className="auth-menu-link">
							<Link to="/new">Create Post</Link>
						</div>
						<div className="auth-menu-link">
							<Link to="/readinglist">Reading List</Link>
						</div>
						<div className="auth-menu-link">
							<Link to="/settings">Settings</Link>
						</div>

						<div className="auth-menu-link border-t-2 border-gray-200">
							<button onClick={handleLogout}>Sign Out</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);

	return (
		<>
			<div className="fixed mx-auto top-0 left-0 z-50 right-0 drop-shadow-sm p-2 max-w-screen-2xl bg-white border-b-2 border-gray-200 md:px-8 lg:px-28 ">
				<div className="w-full h-full flex items-center container">
					{/* menu-button */}
					<div className="flex items-center justify-center md:hidden">
						<button onClick={handleToggleSidebar}>
							<svg
								className="w-7 h-7"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>

					{/* logo */}
					<div className="w-[50px] h-[40px] ml-3">
						<Link to="/">
							<img className="w-full h-full object-cover rounded-[10px]" src={Logo} alt="logo dev" />
						</Link>
					</div>

					<div className="flex items-center justify-center ml-auto mr-2 md:hidden">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>

					<div className="hidden md:block ml-3 relative">
						<label htmlFor="search-field" className="sr-only">
							Search
						</label>
						<input
							id="search-field"
							name="search"
							type="text"
							autoComplete="text"
							className="appearance-none min-w-[370px] rounded-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Search..."
						/>

						<div className="absolute right-[10px] top-[50%] translate-y-[-50%] z-20 cursor-pointer">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
					</div>

					{Object.keys(user).length > 0 ? (
						<>
							<div className="hidden ml-auto md:block">
								<Link to="/new">
									<button className="main-btn">Create Post</button>
								</Link>
							</div>
							<div className="mx-4 cursor-pointer">
								<Link to="/notifications"><svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									></path>
								</svg></Link>
							</div>
							{renderAuth()}
						</>
					) : (
						<>
							<div className="hidden md:block md:ml-auto mr-8">
								<Link to="/sign-in">
									<button className="secondary-btn">Log in</button>
								</Link>
							</div>

							<div className="">
								<Link to="/sign-up">
									<button className="main-btn">Create account</button>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
			<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
		</>
	);
};

export default Navbar;
