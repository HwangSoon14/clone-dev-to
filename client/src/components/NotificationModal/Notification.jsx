import React from 'react';

export default function Notification() {
	return (
		<>
			<div className="flex gap-4 items-center mb-3">
				<img
					className="w-16 h-16 object-cover rounded-full"
					src="https://patterns.dev/img/reactjs/react-logo@3x.svg"
					alt=""
				/>
				<div>
					<p>Phạm Tuyên đã cười vào mặt của bạn</p>
					<span>1 giờ trước</span>
				</div>
			</div>
		</>
	);
}
