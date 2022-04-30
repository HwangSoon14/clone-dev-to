import React from 'react';

const ReadMore = (props) => {
	const { postLength, commentLength, tagLength } = props.data;
	return (
		<div className="relative   bg-[#fafafa] border-2 border-gray-200 rounded-sm flex flex-col gap-y-6  py-4 my-4 md:my-1 w-full   px-3 md:p-2 md:px-1 lg:p-2 top-[40px]  text-black">
			<div className="w-full flex items-center text-gray-500">
				<div className='mr-3'>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						></path>
					</svg>
				</div>
				<span className="inline-block text-md font-medium">{postLength} post published</span>
			</div>

			<div className="w-full flex items-center text-gray-500">
				<div className='mr-3'>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
						></path>
					</svg>
				</div>
				<span className="inline-block text-md font-medium">{commentLength} comments written</span>
			</div>

			<div className="w-full flex items-center text-gray-500">
				<div className='mr-3'>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
						></path>
					</svg>
				</div>
				<span className="inline-block text-md font-medium">{tagLength} tags followed</span>
			</div>
		</div>
	);
};

export default ReadMore;
