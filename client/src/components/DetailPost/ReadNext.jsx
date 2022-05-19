import React from 'react';
import { timeConvert } from '../../Utils/TimeConvert';
import { Link } from 'react-router-dom';

function ReadNext({ post }) {
	return (
		<div className="rounded-md border-[1px] py-5 pl-7 md:py-10 md:pl-14">
			<h3 className="font-bold text-xl mb-7">Read Next</h3>
			{post?.map((val, index) => (
				<Link to={`/${val.userId?.userName}/${val?.slug}`} key={index}>
					<div className="flex gap-5 items-center mb-7 hover:text-blue-500 cursor-pointer">
						<img className="h-16 w-16 object-cover rounded-full" src={val.userId?.avatar} />
						<div>
							<h3 className="font-semibold text-lg">{val.title}</h3>
							<span className="text-sm font-light text-gray-400">{val.userId?.userName}</span>
							<span className="text-sm ml-2 font-light text-gray-400">{timeConvert(val.createdAt)}</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default ReadNext;
