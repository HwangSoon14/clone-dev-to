import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import postApi from '../../api/postApi';
import { auth } from '../../Utils/auth';
import { timeConvert } from '../../Utils/TimeConvert';
import EmojiPicker from '../EmojiPicker/EmojiPicker';

const Comment = ({ comment, parentId, setPostComment , setVisible }) => {
	const [isShowFrameChat, setShowFrameChat] = useState(false);
	const contentComment = useRef();
	const user = useSelector(state => state.auth.current_user)
	const isLogin = useRef(auth(user))

	const addComment = async () => {
			try {
				await postApi.addComment(comment.postId, { content: contentComment.current.value, replyToId: parentId});
				contentComment.current.value = '';
				setShowFrameChat(false)
				setPostComment(x=>!x);
			} catch (error) {}
	}

	return (
		<div className="my-2">
			<div className="w-full h-full flex">
				<div className="mr-2">
					<img
						className="w-[25px] h-[25px]  mt-3 md:w-[32px] md:h-[32px] rounded-full object-contain border-2 border-gray-200"
						src={comment.userId.avatar}
						alt="avt"
					></img>
				</div>
				<div className="flex-1 mb-4 relative">
					<div>
						<div className=" border-2 border-gray-200 rounded-lg">
							<div className="px-3 py-4 md:px-5 bg-white">
								<div className="flex items-center">
									<span className="text-[#3d3d3d] font-semibold text-[14px]  w-[75px] md:w-auto truncate ">
										{comment.userId?.userName}
									</span>
									<span className="mx-1 inline-block text-[#bdbdbd]">•</span>
									<span className="text-gray-500 text-[12px]">{timeConvert(comment?.createdAt)}</span>
								</div>
								<p className="mt-3 tracking-widest leading-7 md:leading-9 text-[14px] text-gray-700 md:text-base">
									{comment.content}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-x-3 my-2 ml-2">
							<button onClick={() => {
								if(!isLogin.current) setVisible(true);
							}} title="heart" aria-pressed="false" className="flex gap-x-2 items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									role="img"
									aria-labelledby="aq83lj4p8qge2gc79ar1zpr9mj0wweh0"
								>
									<path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
								</svg>
								<span className="text-gray-600">{comment.likes} like</span>
							</button>
							<button  className="flex gap-x-2 items-center justify-center" title="heart" aria-pressed="false" onClick={() => {
								
								if(!isLogin.current) setVisible(true);
								else setShowFrameChat(true)
							}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									role="img"
									aria-labelledby="aa0d9rdgv29y69zx3py3wmylx4dozdso"
								>
									<path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
								</svg>
								<span className="text-gray-600">reply</span>


							</button>
						</div>
						<div className="absolute right-2 top-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 cursor-pointer text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
								/>
							</svg>
							
						</div>
					</div>
					{isShowFrameChat && (
						<div className="flex-1">
						<div className="relative">

							<textarea
								placeholder="What's on your mind now ? "
								className="w-full border-[1px] rounded-lg min-h-[80px] pl-4 pt-3"
								ref={contentComment}
								onFocus={() => {
									if(!isLogin.current) setVisible(true);
								}}
							></textarea>
							<EmojiPicker textRef={contentComment}/>

						</div>

							<button
								className="px-3 py-2 mt-2 bg-blue-700 text-white  rounded-md"
								onClick={ () => {

									if(!isLogin.current) setVisible(true)
									else addComment();				}
								}
							>
								Submit
							</button>
							<button
								onClick={() => {
									setShowFrameChat(false);
								}}
								className="ml-5 hover:bg-slate-200 px-4 py-2 rounded-md"
							>
								Dismiss
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default React.memo(Comment);
