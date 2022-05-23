import React from 'react';




const DetailSkeleton = () => {
	return (
		<div className="mt-[70px] mb-5 max-w-screen-xl mx-auto px-3 md:px-5 2xl:px-0 md:flex md:flex-wrap md:gap-3 xl:gap-5">
			<div className="w-full fixed bottom-0 left-0 h-14  animate-pulse rounded-t-xl border-t-2 md:border-t-0 md:rounded-t-none md:h-auto md:relative md:w-16 z-20">
				<div className="md:sticky top-[160px] left-0 flex w-full h-full md:h-auto items-center justify-between px-8 md:flex-col md:justify-start md:gap-y-8">
                <div className="flex items-center justify-center md:flex-col group cursor-pointer">
					<div className='p-2  group-hover:bg-red-100  rounded-full'>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="24"
							viewBox="0 0 24 24"
							role="img"
							aria-hidden="true"
							className='inline-block group-hover:fill-[#f05]'
						>
							<path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
						</svg>
					</div>
				</div>
				<div className="flex items-center justify-center md:flex-col group cursor-pointer">
					<div className="p-2 group-hover:bg-[#d7f6e6] rounded-full">
						<svg
							className="inline-block group-hover:fill-[#5dc]"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							role="img"
							aria-hidden="true"						>
							<path
								d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z"
								fill="#08090A"
							></path>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"
							></path>
						</svg>
					</div>
				</div>
				<div className="flex items-center justify-center md:flex-col group cursor-pointer" >
					<div className='p-2 group-hover:bg-[#d1d1ff]  rounded-full' >
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							role="img"
							aria-hidden="true"
							className='inline-block group-hover:fill-[#55c]'
						>
							<path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
						</svg>
					</div>
				</div>
				</div>
				
			</div>
			

            <div className="md:flex-1 overflow-auto mb-5 md:mb-0">
			{/* content post */}
			<div className="break-words rounded-md border-[1px] mb-5">
				<div className="h-80 w-full rounded-t-md bg-gray-200 animate-pulse"></div>
				{/* post info */}
				<div className="p-5 sm:p-10">
					{/* info author */}
					<div className="flex gap-2 mb-5">
						<div className="h-10 w-10 bg-gray-200 animate-bounce rounded-full"></div>
						<div>
                        <div className="w-32 md:w-52  bg-gray-100 h-4 rounded-md "></div>

                        <div className="w-20 md:w-32 mt-2 bg-gray-100 h-4 rounded-md "></div>
						</div>
					</div>
					{/* title */}
                    <div className="w-[90%] mt-8 bg-gray-200 h-8 rounded-md "></div>
					{/* tags */}
					<div className="flex flex-wrap gap-4 mt-3">
					<div className="w-72 mt-4 bg-gray-100 h-4 rounded-md "></div>
					<div className="w-72 mt-4 bg-gray-100 h-4 rounded-md "></div>

					

  
					</div>
					{/* content */}
					<div className="custom-highlighter-syntax pt-7 pb-6 sm:pt-10 sm:pb-8">
					</div>
				</div>
			</div>

		</div>


        <div className="w-full md:w-[calc(100%-75px)] ml-auto lg:w-[23%] relative">
			<div className="sticky top-[70px] left-0">
				<div className="rounded-lg border-[1px] ">
					<div className="h-8 bg-gray-200 animate-pulse rounded-t-md "></div>
					<div className="p-4">
						<div className="flex gap-2 items-end absolute left-4 top-4">
							<div  className="h-12 w-12 bg-gray-300 animate-bounce400 rounded-full" ></div>
							<div className=" bg-gray-100 w-36 h-4 rounded-md "></div>
						</div>
						<div className="w-full border-[1px] mt-8 p-2 rounded-md animate-pulse bg-gray-200 h-10 "></div>
						<div className="w-[90%] bg-gray-100 h-4 rounded-md my-5"></div>
						<div className="w-[85%] bg-gray-100 h-4 rounded-md my-5"></div>
						<div className="w-[85%] bg-gray-100 h-4 rounded-md my-5"></div>
						
					</div>
				</div>
				<div className="mt-4 rounded-lg border-[1px] p-3">
                <div className="w-full border-[1px] mt-4 p-2 rounded-md animate-pulse bg-gray-200 h-4 "></div>
                <div className="w-full border-[1px] mt-4 p-2 rounded-md animate-pulse bg-gray-200 h-4 "></div>

						
				</div>
			</div>
		</div>
		</div>
	);
};

export default DetailSkeleton;
