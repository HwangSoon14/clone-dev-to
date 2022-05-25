import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import postApi from '../../api/postApi';
import CommentParent from './CommentParent';
import EmojiPicker from '../EmojiPicker/EmojiPicker';
import AuthModal from '../AuthModal/AuthModal';
import { auth } from '../../Utils/auth';
import { SocketContext } from '../../context/socket';
import { io } from 'socket.io-client';

export default function Comments({ post }) {
	
	const [commentsParent, setCommentsParent] = useState([]);
	const [isPostComment, setPostComment] = useState(false);
	const user = useSelector((state) => state.auth.current_user);
	// const socket = useContext(SocketContext);
	const countComment = useRef();
	const contentComment = useRef();
	const [visibleModal, setVisibleModal] = useState(false);
	const isLogin = useRef(auth(user));
	const socket = useContext(SocketContext);

	useEffect(() => {
		socket.on('connect', () => {
		});
		return () => {
			socket.on('disconnect', () => {
			});
		};
	}, []);

	useEffect(() => {
		socket.on("parent_comment", (data) => {
			if(data.postId === post._id) {
				setPostComment(x=> !x)
			}
		})
	}, [socket]);

	useEffect(() => {
		const getData = async () => {
			const data = await postApi.getCommentByPostId(post._id, 'desc');
			countComment.current = data;
			const Parents = data.filter((val) => !val.replyToId);
			setCommentsParent(Parents);
		};
		getData();
	}, [post._id, isPostComment]);

	const addComment = async () => {
		try {
			await postApi.addComment(post._id, { content: contentComment.current.value });
			socket.emit("parent_comment", {postId: post._id,  content: contentComment.current.value })
			contentComment.current.value = '';
	
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="border-t-2 border-gray-100">
				<div className="h-full px-3 py-4 md:px-12">
					<span className="block font-semibold text-lg md:text-2xl md:mt-4 mb-8">
						Discussion ({countComment.current?.length})
					</span>
					<div className="flex gap-2 mb-6">
						<img className="w-[37px] h-[37px] object-cover rounded-full border-[1px]" src={user.avatar} alt="" />
						<div className="flex-1">
							<div className="relative">
								<textarea
									onFocus={() => {
										if (!isLogin.current) setVisibleModal(true);
									}}
									placeholder="What's on your mind now ? "
									className="w-full border-[1px] rounded-lg min-h-[80px] pt-3 pl-4 "
									ref={contentComment}
								></textarea>
								<EmojiPicker textRef={contentComment} />
							</div>

							<button
								className="px-3 py-2 mt-2 bg-blue-700 text-white  rounded-md"
								onClick={() => {
									if (!isLogin.current) return setVisibleModal(true);
									else addComment();
								}}
							>
								Submit
							</button>
						</div>
					</div>
					<div className="w-full h-full">
						{commentsParent?.map((comment, idx) => (
							<CommentParent key={comment._id} comment={comment} setVisible={setVisibleModal} />
						))}
					</div>
				</div>
			</div>
			{visibleModal && <AuthModal setVisible={setVisibleModal} />}
		</>
	);
}
