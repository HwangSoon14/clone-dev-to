import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import postApi from '../../api/postApi';
import CommentParent from './CommentParent';

export default function Comments({ post }) {

	const [commentsParent, setCommentsParent] = useState([]);
	const [isPostComment, setPostComment] = useState(false);
	const user = useSelector((state) => state.auth.current_user);
	const contentComment = useRef();

	useEffect(() => {
		const getData = async () => {
			const data = await postApi.getCommentByPostId(post._id);
			const Parents = data.filter((val) => !val.replyToId);
			setCommentsParent(Parents);
		};
		getData();
	}, [post._id, isPostComment]);

	return (
		<div className="border-t-2 border-gray-100">
			<div className="h-full px-3 py-4 md:px-12">
				<span className="block font-semibold text-lg md:text-2xl md:mt-4 mb-8">
					Discussion ({commentsParent.length})
				</span>
				<div className="flex gap-2 mb-3">
					<img className="w-[37px] h-[37px] object-cover rounded-full border-2" src={user.avatar} alt="" />
					<div className="flex-1">
						<textarea
							placeholder="nhập nội dung comment nào các dân chơi"
							className="w-full border-[1px] rounded-lg min-h-[80px]"
							ref={contentComment}
						></textarea>
						<button
							className="px-3 py-2 mt-2 bg-blue-700 text-white  rounded-md"
							onClick={async () => {
								try {
									 await postApi.addComment(post._id, { content: contentComment.current.value });
                                     contentComment.current.value  = ""
                                     setPostComment(x => !x);
								} catch (error) {}
							}}
						>
							Submit
						</button>
					</div>
				</div>
				<div className="w-full h-full">
					{commentsParent?.map((comment, idx) => (
						<CommentParent key={comment._id} comment={comment}/>
					))}
				</div>
			</div>
		</div>
	);
}
