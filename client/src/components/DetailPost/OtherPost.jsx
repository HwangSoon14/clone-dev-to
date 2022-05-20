import React from 'react';
import { Link } from 'react-router-dom';
import { timeConvert } from '../../Utils/TimeConvert';

export default function OtherPost({ post }) {
	console.log(post);
	return (
		<div className="w-full md:w-[calc(100%-75px)] ml-auto lg:w-[23%] relative">
			<div className="sticky top-[70px] left-0">
				<div className="rounded-lg border-[1px] ">
					<div className="h-8 bg-purple-500 rounded-t-md "></div>
					<div className="p-4">
						<div className="flex gap-2 items-end absolute left-4 top-4">
							<img src={post.userId?.avatar} alt="" className="h-12 w-12 object-cover rounded-full" />
							<h3 className="capitalize font-semibold text-base pb-1">{post.userId?.userName}</h3>
						</div>
						<button className="w-full text-center border-[1px] mt-8 p-2 rounded-md">Following</button>
						<h4 className="font-light text-sm my-4">{post.userId?.description}</h4>
						<h4 className="font-medium text-sm">JOINED</h4>
						<span className="font-light text-sm">{timeConvert(post.userId?.createdAt)}</span>
					</div>
				</div>
				<div className="mt-4 rounded-lg border-[1px] p-3">
					<h1 className="font-semibold text-lg pb-3 border-b-[1px] border-slate-100">
						More from{' '}
						<Link to={`/profile/${post.userId?.userName}`} className="text-blue-700">
							{post.userId?.userName}
						</Link>
					</h1>
					{post.otherPost?.map((val) => (
						<Link to={`/${post.userId.userName}/${val.slug}`}>
							<div className="py-4 border-b-[1px] border-slate-100 last:border-0 hover:text-blue-500">
								<h3 className="">{val.title}</h3>
								<div className="flex gap-2 flex-wrap">
									{val.tags?.map((tag) => (
										<span className="font-light text-[13px] text-slate-500">#{tag}</span>
									))}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
