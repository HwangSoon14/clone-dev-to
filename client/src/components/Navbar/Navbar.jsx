import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assest/logo.png';
import NotificationMoal from '../NotificationModal';
import Sidebar from '../Sidebar/Sidebar';
import Search from './Search';
const Navbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [isShowAuthMenu, setIsShowAuthMenu] = useState(false);
	const user = useSelector((state) => state.auth.current_user);
	let navigate = useNavigate();

	const handleToggleSidebar = () => {
		setShowSidebar((prev) => !prev);
	};

	const toggleAuthMenu = () => {
		setIsShowAuthMenu((prev) => !prev);
	};

	const handleLogout = () => {
		setIsShowAuthMenu(false);
		navigate('/signout-confirm');
	};

	const renderAuth = () => (
		<div className="flex items-center justify-center">
			<div className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] border-[1px] border-gray-300  rounded-full overflow-hidden">
				<button onClick={toggleAuthMenu}>
					<img src={user.avatar} alt="avatar" className="w-full h-full object-contain  rounded-full"></img>
				</button>
			</div>

			{isShowAuthMenu && (
				<div className="absolute w-[100%] h-auto sm:w-[300px] right-0 top-[50px] left-0 sm:left-auto z-50 text-black drop-shadow-sm">
					<div className="w-[96%] h-full px-2 animate-scrollDown gay-y-2 bg-white mx-auto border-[1px] rounded-lg border-gray-200">
						<Link
							className="w-full pl-4 py-3 border-b-2 my-2 border-gray-200 hover:bg-purple-100 rounded-md hover:underline block"
							to={`/profile/${user.userName}`}
						>
							<span className="block font-bold">{user.userName}</span>
							<span className="block text-gray-500 text-sm">@{user.userName}</span>
						</Link>
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
			<div className="fixed w-full border-b-[1px] shadow-sm border-gray-200 bg-white top-0 left-0 z-50 right-0">
				<div className=" mx-auto py-2 max-w-screen-xl">
					<div className="relative w-full h-full flex items-center px-3">
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

						<Search />

						{Object.keys(user).length > 0 ? (
							<>
								<div className="hidden ml-auto md:block">
									<Link to="/new">
										<button className="main-btn">Create Post</button>
									</Link>
								</div>
								<NotificationMoal />
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
			</div>
			<Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
		</>
	);
};

export default Navbar;
