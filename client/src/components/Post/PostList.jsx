import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import postApi from '../../api/postApi';
import Post from './Post';
import PostSkeletonList from './PostSkeletonList';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostList = () => {
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(false);
	const [listPostData, setListPostData] = useState([]);
	let currentLimit = useRef(5);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		(async () => {
			const res = await postApi.getAllPost(location.pathname, currentLimit.current);
			setListPostData(res);
			setIsLoading(false);
		})();
	}, [location]);

	useEffect(() => {
		currentLimit.current = 5;
	}, [location]);

	const fetchMoreData = async () => {
		currentLimit.current += 5;
		const res = await postApi.getAllPost(location.pathname, currentLimit.current);
		if (res.length < currentLimit.current) return setHasMore(false);
		setListPostData(res);
	};

	return isLoading ? (
		<PostSkeletonList />
	) : (
		<div className="flex flex-col gap-y-2">
			<InfiniteScroll
				dataLength={listPostData.length}
				next={fetchMoreData}
				hasMore={hasMore}
				loader={(<h4>Loading...</h4>)}
			>
				{listPostData?.map((post, idx) =>
					idx === 0 ? <Post key={idx} post={post} type /> : <Post key={idx} post={post} />,
				)}
			</InfiniteScroll>
		</div>
	);
};
export default PostList;
