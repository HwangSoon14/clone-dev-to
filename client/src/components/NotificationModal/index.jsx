import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notification from "./Notification"

export default function NotificationMoal() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="mx-4 cursor-pointer relative">
			<div
				to="/notifications"
				onClick={() => {
					setIsActive(true);
				}}
			>
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
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					></path>
				</svg>
				<></>
			</div>
			{isActive && (
				<div
					className="h-[50vh] w-[360px] border-[1px] shadow-md bg-white rounded-lg absolute right-[-40px] top-12 p-4 overflow-auto"
					onMouseLeave={() => {
						setIsActive(false)
					}}
				>
					<h1>Thông báo</h1>
					<div className='my-3'>
                    <button className='px-4 py-1 rounded-full bg-slate-300 mr-2'>Tất cả</button>
					<button>Chưa đọc</button>
                    </div>
					<div className="flex justify-between">
						<span>Trước đó</span>
						<span>Xem tất cả</span>
					</div>
                    <div className='mt-3'>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    </div>
				</div>
			)}
		</div>
	);
}
