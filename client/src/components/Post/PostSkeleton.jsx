import React from 'react';

const PostSkeleton = () => {
	return (
		<div className="w-full pb-4 bg-white flex flex-col overflow-hidden border-gray-200 rounded-lg h-[450px] border-[1px]  ">
			<div className="w-full h-[300px] bg-gray-200"></div>
            <div className="flex animate-pulse h-full space-x-5 flex-1 pt-6 ml-[20px]">
				<div className="w-6 h-6 bg-gray-200 rounded-full "></div>
				<div className="flex flex-col space-y-3 w-full">
					<div className="w-52 bg-gray-100 h-4 rounded-md "></div>
					<div className="w-72 bg-gray-100 h-4 rounded-md "></div>
                    <div className="w-[90%] bg-gray-100 h-4 rounded-md "></div>
				</div>
			</div>
		</div>
	);
};

export default PostSkeleton;
