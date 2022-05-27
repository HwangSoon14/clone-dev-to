import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userApi from '../../api/userApi';
import { timeConvert } from '../../Utils/TimeConvert';

export default function OtherPost({ post }) {
	const user = useSelector((state) => state.auth.current_user);
	const [isFollow, setFollow] = useState(false);
	const currentFollowing = useRef();
	useEffect(() => {
		const getApi = async () => {
			const data = await userApi.getUserInfo(user.userName);
			currentFollowing.current = data.followingUsers || [];
			if (currentFollowing.current?.includes(post.userId?._id)) {
				setFollow(true);
			} else {
				setFollow(false);
			}
		};
		getApi();
	}, [post]);

	const handleFollow = async () => {
		if (currentFollowing.current?.includes(post.userId?._id)) {
			await userApi.unfollowUsers(post.userId?._id);
			currentFollowing.current = currentFollowing.current?.filter((val) => val !== post.userId?._id);
			setFollow(false);
		} else {
			await userApi.followUsers(post.userId?._id);
			currentFollowing.current = currentFollowing.current?.push(post.userId?._id);
			setFollow(true);
		}
	};
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
						<button
							onClick={handleFollow}
							className={
								isFollow
									? `w-full text-center border-[1px] mt-8 p-2 rounded-md`
									: 'w-full text-center border-[1px] mt-8 p-2 rounded-md bg-blue-500 text-white'
							}
						>
							{isFollow ? 'Following' : 'Follow'}
						</button>

						<h4 className="font-light text-sm my-4">{post.userId?.description}</h4>
						<h4 className="font-medium text-sm">JOINED</h4>
						<span className="font-light text-sm">{timeConvert(post.userId?.createdAt)}</span>
					</div>
				</div>
				<div className="mt-4 rounded-lg border-[1px] p-3">
					<h1 className="font-semibold text-lg pb-3 border-b-[1px] border-slate-100">
						More from{' '}
						<Link to={`/profile/${post.userId?.userName}`} className="text-blue-700 capitalize">
							{post.userId?.userName}
						</Link>
					</h1>
					{post.otherPost?.map((val, idx) => (
						<Link to={`/${post.userId.userName}/${val.slug}`} key={idx}>
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
