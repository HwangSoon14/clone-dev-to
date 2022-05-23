import React, { useEffect, useState } from 'react';
import ActionPost from '../components/DetailPost/ActionPost';
import MainPost from '../components/DetailPost/MainPost';
import FooterLayout from '../components/Layout/FooterLayout';
import { useParams } from 'react-router-dom';
import postApi from '../api/postApi';
import ScrollToTop from '../components/ScrollToTop/index';
import OtherPost from '../components/DetailPost/OtherPost';
import DetailSkeleton from '../components/DetailSkeleton';

function DetailPage() {
	const params = useParams();
	const [post, setPost] = useState([]);
	const [isLoading , setIsLoading] = useState(true);

	useEffect(() => {
		const callApi = async () => {
			try {
				const data = await postApi.getPostBySlug(params.slug);
				setPost(data);
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false);
			}	
		};
		callApi();
	}, [params]);

	return (
		<FooterLayout>
			<ScrollToTop>
				{isLoading ? <DetailSkeleton /> : <section className="mt-[70px] mb-5 max-w-screen-xl mx-auto px-3 md:px-5 2xl:px-0 md:flex md:flex-wrap md:gap-3 xl:gap-5">
					<ActionPost />
					<MainPost post={post} />
					<OtherPost post={post}  />
				</section>}
			</ScrollToTop>
		</FooterLayout>
	);
}

export default DetailPage;
