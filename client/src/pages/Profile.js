import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Post from '../components/Post/Post';
import ReadMore from '../components/Profile/ReadMore';
import {dummyPost} from '../dummy-tab/index'


const Profile = () => {
	const [isReadMore, setIsReadMore] = useState(false);
    const [textMore , setTextMore ] = useState({
        post: '1 post published',
        comment: '0 comments written',
        tag: '6 tags followed'
    })

	const handleShowReadMore = () => {
		setIsReadMore(true);
	};

  


	return (
		<>

		<div className="container max-w-screen-2xl min-h-screen bg-white-smoke relative pb-8 md:pb-20 lg:pb-24">
			<div className="absolute w-full h-[40px] md:h-[120px] bg-black top-0 left-0 right-0 z-0"></div>
			<div className="relative top-[40px] md:top-[80px] md:mx-auto  max-w-[1000px] lg:border-gray-200 lg:border-2 md:pb-8 md:w-[98%] border-b-2 rounded-md border-gray-300 pb-4 w-full h-full mx-auto px-3 md:p-2 md:px-1 lg:px-28 bg-white  text-black">
				<div className="w-[55px] h-[55px] md:w-[130px] md:h-[130px] md:mx-auto  translate-y-[-50%] border-4 md:border-8 border-black rounded-full ml-2 bg-black">
					<img
						src="https://res.cloudinary.com/practicaldev/image/fetch/s--lG8lYKyX--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/834510/c6c51cda-675c-4fe1-a7fa-5ff355603228.jpeg"
						alt="avatar"
						className="w-full h-full object-cover rounded-full"
					/>
				</div>
				<div className="w-full flex justify-end absolute top-4 right-4">
					<Link to="/#">
						<button className="main-btn">Edit Profile</button>
					</Link>
				</div>
				<h1 className="font-bold text-2xl md:text-center">Hoafng Son</h1>
				<p className="my-2 font-normal md:text-center">404 bio not found</p>
				<div className="flex items-center gap-x-3 px-2 md:justify-center">
					<div>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
							></path>
						</svg>
					</div>
					<span className="inline-block font-light text-sm text-gray-500">Joined on 22 thg 3, 2022</span>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							viewBox="0 0 24 24"
							role="img"
							aria-labelledby="aau4g1xyi3ts2k3pknxhf40xtspmeyko"
							fill="none"
							stroke="currentColor"
						>
							{/* <title id="aau4g1xyi3ts2k3pknxhf40xtspmeyko">github website</title> */}
							<path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
						</svg>
					</div>
				</div>
					
                {!isReadMore && <div className="mt-6  ">
						<button
							onClick={handleShowReadMore}
							className="flex md:hidden w-full p-2 items-center justify-center border-[2px] border-gray-300 rounded-md text-sm font-bold">
							More info about @hwangsoon14
						</button>
					</div>}   
                

				
			</div>
            
            <div className='flex flex-col md:flex-row mx-2 max-w-[1000px] lg:mx-auto lg:mt-4'>
            {isReadMore && <ReadMore data={textMore} />}
            <div className='relative pb-4 top-[40px] md:top-[80px] flex flex-1 flex-col gap-y-2 md:p-1 lg:p-2'>
                {dummyPost.map((post, idx) => (
                    <Post post={post} key={idx}/>
                ))}
            </div>
            </div>

            
		</div>
		

		<Footer />
	
		</>
	);
};

export default Profile;
