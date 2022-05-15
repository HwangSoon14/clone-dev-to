import React from 'react';

export default function Tag({title, description, postCount, color, thumbnail}) {
	return (
		<div className="relative rounded-lg border-[1px]">
			<div className="h-4 rounded-t-lg" style={{backgroundColor: color}} ></div>
            <div className='flex flex-col p-6 items-start'>
            <span className='font-semibold p-3' style={{color: color}}>#{title}</span>
			<p className='line-clamp-3 text-[#575757]'>
			{description}
			</p>
            <h3 className='text-sm text-gray-600 pt-3 pb-4'>{postCount} posts published</h3>
            <button className='px-5 py-2 text-bold bg-gray-200 rounded-md'>
             Follow
            </button>
            </div>
           {thumbnail &&  <img className='h-[70px] w-[70px] object-contain absolute right-2 bottom-2 rotate-6' src={thumbnail} alt="" />}
		</div>
	);
}
