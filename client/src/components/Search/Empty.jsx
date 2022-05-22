import React from 'react';

const Empty = ({text}) => {
    return (
        <div className="container max-w-screen-xl  md:py-2 md:px-1 border-2 border-gray-200 md:rounded-lg lg:px-28 bg-white h-[25vh]   w-full overflow-x-hidden">
			<div className="w-full h-full flex flex-col items-center justify-center px-6">
				<span className="block  text-gray-600 mb-3">{text}</span>
				<p className="max-w-[80%] text-sm text-center leading-7">
				
				</p>
			</div>
		</div>
    );
};

export default Empty;