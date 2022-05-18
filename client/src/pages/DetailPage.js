import React, { useEffect, useState } from 'react';
import ActionPost from '../components/DetailPost/ActionPost';
import MainPost from '../components/DetailPost/MainPost';
import FooterLayout from '../components/Layout/FooterLayout';
import { useParams } from 'react-router-dom';
import postApi from '../api/postApi';
import {useSelector} from 'react-redux'

function DetailPage() {
	const params = useParams();
	const [post, setPost] = useState([]);
	const [commentList, setCommentList] = useState([]);
	const [isLike , setIsLike] = useState(false);
	const user = useSelector(state => state.auth.current_user);

	useEffect(() => {
		const callApi = async () => {
			const data = await postApi.getPostBySlug(params.slug);
			const comments = await postApi.getCommentByPostId(data._id);
			setCommentList(comments)
			setPost(data)
		};
		callApi();
	}, []);


	console.log(post);

	
	return (
		<FooterLayout>
			<section className="mt-[70px] mb-5 max-w-screen-2xl mx-auto px-3 md:px-5 2xl:px-0 md:flex md:flex-wrap md:gap-3 xl:gap-5">
				<ActionPost post={post} />
				<MainPost post={post} commentList={commentList}/>
				<div className="w-full md:w-[calc(100%-76px)] ml-auto lg:w-1/5 relative">
					<div className="sticky top-[70px] left-0">
						<div className="rounded-lg border-[1px] ">
							<div className="h-8 bg-purple-500 rounded-t-md "></div>
							<div className="p-4">
								<div className="flex gap-2 items-end absolute left-4 top-4">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseeFyHCn_0C84nKwMjHhtD_Qk4Kxrj7SNbw&usqp=CAU"
										alt=""
										className="h-12 w-12 object-cover rounded-full"
									/>
									<h3 className="capitalize font-semibold text-base pb-1">tuyen beat</h3>
								</div>
								<button className="w-full text-center border-2 mt-8 p-2 rounded-md">Following</button>
								<h4 className="font-light text-sm my-4">"First, solve the problem. Then, write the code." - John J.</h4>
								<h4 className="font-medium text-sm">JOINED</h4>
								<span className="font-light text-sm">Feb 24, 2022</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</FooterLayout>
	);
}

export default DetailPage;
