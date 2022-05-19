import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import postApi from '../../api/postApi';
import userApi from '../../api/userApi';

function ActionPost() {

	const [isLike , setIsLike] = useState(false);
	const [isSave , setIsSave] = useState(false);
	const user = useSelector(state => state.auth.current_user);
	const [post, setPost] = useState([]);
	const params = useParams();
	

	useEffect(() => {
		const callApi = async () => {
			const data = await postApi.getPostBySlug(params.slug);
			setPost(data);
			if(data.likes.includes(user?._id)) {
				 setIsLike(true);
			}
			else  setIsLike(false);
			if(data.saver.includes(user?._id)) {
				setIsSave(true);
			}
			else  setIsSave(false);
		};
		callApi();
	}, [isLike , isSave, params]);

	const handleLikePost =  async () => {
		try {
			const res = await postApi.likePost(post?._id);
			setIsLike(true);
		} catch (error) {
			console.log(error)
		}
	}
	const handleUnlikePost =  async () => {
		try {
			const res = await postApi.unLikePost(post?._id);
			setIsLike(false);
		} catch (error) {
			console.log(error)
		}
	}
	const handleSavePost =  async () => {
		try {
			const res = await userApi.savePost(post?._id);
			setIsSave(true);
		} catch (error) {
			console.log(error)
		}
	}
	const handleUnsavePost =  async () => {
		try {
			const res = await userApi.unsavePost(post?._id);
			setIsSave(false);
		} catch (error) {
			console.log(error)
		}
	}

	// useEffect(() => {
	// 
	// } , [post.likes])

	// const likePost = async () => {
	// 	try {
	// 		const res = await postApi
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	
	// 	(async() => {
	// 		try {
	// 			const res = await postApi.likePost(post._id); 
	// 			console.log(res);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}


	return (
		<div className="w-full fixed bottom-0 left-0 h-14 bg-white rounded-t-xl border-t-2 md:rounded-t-none md:h-auto md:relative md:w-16 z-20">
			<div className="md:sticky top-[70px] left-0 flex w-full h-full items-center justify-between px-8 md:flex-col md:justify-start md:mt-32 md:gap-y-8">
				<div className="flex items-center justify-center md:flex-col group cursor-pointer">
					<div className={`p-2  group-hover:bg-red-100  ${isLike && 'bg-red-100'} rounded-full`} onClick={() => {
						if(isLike) return handleUnlikePost();
						else return handleLikePost();
					}}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="24"
							viewBox="0 0 24 24"
							role="img"
							aria-hidden="true"
							className={`inline-block group-hover:fill-[#f05] ${isLike && 'fill-[#f05]'}`}
						>
							<path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
						</svg>
					</div>
					<span className={`inline-block ml-1 text-gray-600 text-sm md:text-lg  group-hover:text-red-500 ${isLike && 'text-red-500'}`}>{post.likes?.length}</span>
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
					<span className="inline-block ml-1 text-gray-600 text-sm md:text-lg group-hover:text-[#5dc]">13</span>
				</div>
				<div className="flex items-center justify-center md:flex-col group cursor-pointer" >
					<div className={`p-2 group-hover:bg-[#d1d1ff]  ${isSave && 'bg-[#d1d1ff]'}  rounded-full`} onClick={() => {
						if(isSave) return handleUnsavePost();
						else return handleSavePost();
					}}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							role="img"
							aria-hidden="true"
							className={`inline-block group-hover:fill-[#55c] ${isSave && 'fill-[#55c]'}`}
						>
							<path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
						</svg>
					</div>
					<span className={`inline-block ml-1 text-gray-600 text-sm md:text-lg group-hover:text-[#55c] ${isSave && 'text-[#55c]'}`}>{post.saver?.length}</span>
				</div>
			</div>
		</div>
	);
}

export default ActionPost;
