import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userApi from '../api/userApi';
import FooterLayout from '../components/Layout/FooterLayout';
import EmptyPage from '../components/ReadingList/EmptyPage';
const ReadingList = () => {
	const [savePostList, setSavePostList] = useState([]);
	const [tagList, setTagList] = useState([]);

	const renderSelect = (tags) => (
		<select
			className="form-select appearance-none
            relative
      block
      w-full
      px-3
      py-2
      font-normal
      text-gray-500
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
			aria-label="Default select example"
		>
			<option defaultValue={0}>All tags</option>

			{tags && tags.map((tag, idx) => (
				<option key={idx} value={idx + 1}>
					{tag}
				</option>
			))}
		</select>
	);
	const renderTags = (tags) => (
		<div className="w-full h-full flex flex-col gap-y-1">
			<button className="pl-2 py-2 w-full text-left bg-white block rounded-lg font-medium  text-purple-800">
				All tags
			</button>
			{tags && tags.map((tag, idx) => (
				<button key={idx} className="block bg-transparent pl-2 py-2 text-gray-500 w-full text-sm text-left transition-all hover:bg-purple-100 rounded-lg">
					#{tag}
				</button>
			))}
		</div>
	);
	const renderPostSaved = (postList) => (
		<div NameName="w-full h-full">
			{postList?.map((post, idx) => (
				<Link to="/" key={idx}>
					<div className="flex items-stretch justify-between px-2 pt-4 pb-2 md:pl-6 bg-white">
						<div className="flex-1 flex items-stretch">
							<div className="w-[35px] h-[auto] md:w-[40px]">
								<img
									src={post.userId.avatar}
									alt="avatar"
									className="w-full h-[35px] md:h-[40px] object-contain rounded-full"
								/>
							</div>
							<div className="flex-1 ml-2 max-w-[80%]">
								<p className="text-md  font-semibold text-gray-800 md:text-[18px]">{post.title}</p>
								<div className="flex items-center flex-wrap max-w-[95%]">
									<span className="inline-block text-gray-700 text-[12px] font-semibold">{post.userId.userName}</span>
									<span className="inline-block text-gray-400 text-[12px] font-normal ml-1 ">
										• {dayjs(post.updatedAt).format('DD-MM')}
									</span>

									{post.tags.map((tag, idx) => (
										<span
											key={idx}
											className="text-[10px] text-gray-700 font-thin md:text-[12px] px-1 py-1 rounded-lg border-2 mx-1 border-transparent hover:bg-gray-200 hover:border-gray-300"
										>
											#{tag}
										</span>
									))}
								</div>
							</div>
						</div>
						<div className="w-[20%] text-[14px] text-gray-700 md:mt-auto ">
							<button className="block secondary-btn ml-auto">Archive</button>
						</div>
					</div>
				</Link>
			))}
		</div>
	);

	useEffect(() => {
		const fetchData = async () => {
			const res = await userApi.getSavedPostList();
			setSavePostList(res);

			const list = res.reduce((initArray, currentItem) => {
				const obj = { ...initArray };
				currentItem['tags'].map((item) => {
					obj[item] = (obj[item] || 0) + 1;
				});
				return obj;
			}, {});

			const temp_tagList = res.reduce((prev, current) => {
				// const obj = {...initArray}
				// currentItem['tags'].map(item => {
				//     obj[item] = (obj[item] || 0) + 1;
				// })
				// return obj;
				current['tags'].map((tag) => {
					if (prev.includes(tag)) return null;
					return prev.push(tag);
				});
				return prev;
			}, []);
			setTagList(temp_tagList);
		};
		fetchData();
	}, []);

	return (
		<FooterLayout>
			<div className="container md:min-h-[60vh] max-w-screen-2xl mx-auto mt-14 md:py-2 md:px-1 lg:px-28 bg-white-smoke  w-full overflow-x-hidden">
				<div className="px-2 py-4">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between">
						<span className="block md:inline-block text-[22px] font-semibold md:text-3xl">
							Reading List <span className="text-[18px] text-main-color md:text-2xl">({savePostList.length})</span>
						</span>
						<div className="flex md:items-center md:justify-center gap-x-2">
							<div className="hidden md:block">
								<button className="secondary-btn">View archive</button>
							</div>
							<div className="w-full md:w-[220px] mt-3 md:mt-0 flex md:items-center md:justify-center">
								<input
									name="search"
									type="text"
									autoComplete="search"
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Search..."
								/>
							</div>
						</div>
					</div>
					<div className="md:hidden mt-3">{renderSelect(tagList)}</div>
				</div>
				<div className="flex items-stretch gap-x-2">
					<div className="hidden md:block w-[250px]">{renderTags(tagList)}</div>
					<div className="flex-1 border-t-2 border-b-2 drop-shadow-sm border-gray-100 md:border-2 md:rounded-xl">
						{savePostList.length > 0 ? renderPostSaved(savePostList) : <EmptyPage />}
					</div>
				</div>
			</div>
		</FooterLayout>
	);
};

export default ReadingList;
