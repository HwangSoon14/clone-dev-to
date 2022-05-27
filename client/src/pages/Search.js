import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import postApi from '../api/postApi';
import FooterLayout from '../components/Layout/FooterLayout';
import Post from '../components/Post/Post';
import Empty from '../components/Search/Empty';
import Tag from '../components/Search/Tag';
import NotFound from '../pages/NotFound';

const Search = () => {
	const [isActiveTab, setIsActiveTab] = useState(0);
	const [isActiveTabItem, setIsActiveTabItem] = useState(0);
	const [data, setData] = useState(null);
	const location = useLocation();
	let navigate = useNavigate();
	const [searchParams, setSearchParam] = useSearchParams();

	useEffect(() => {
		if (location.search === '') navigate('?q=&type=posts')
	}, [location, navigate]);

	useEffect(() => {
		(async () => {
			try {
				// const urlArray = location.search.slice(1).split("&");
				let type = searchParams.get('type');
				let q = searchParams.get('q');
				let sort = searchParams.get('sort');
				const res = await postApi.search(type, q, sort);
				setData(res);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [location, searchParams]);

	const renderPosts = (data) => (
		<div>
			{data &&
				
            data?.length > 0 ? 
                    data?.map((post, idx) => (
                        <div key={idx} className="my-1 md:my-2">
						<Post post={post} />
					</div>
			)) 
            : <Empty text="No results match that query"/>
            }
		</div>
	);

	const renderTags = (tags) => (
		<div>
			{
                tags?.length > 0 ?
            tags?.map((tag, idx) => (
				<div key={idx} className="my-1 md:my-2">
					<Tag tag={tag} />
				</div>
			)) 
                :  <Empty text="No results match that query"/>
            }
		</div>
	);

	const renderComponents = useCallback(() => {
		const type = searchParams.get('type');
		switch (type) {
			case 'posts':
				return renderPosts(data);
			case 'tags':
				return renderTags(data);
			case 'myposts':
				return renderPosts(data);
			default:
				return <div></div>;
		}
	}, [data, searchParams]);

	const renderTabList = () => (
		<div className="flex px-2 flex-nowrap mt-2 mb-3 items-center gap-x-2 overflow-x-scroll md:flex-col md:items-start md:mr-4">
			<div
				onClick={() => {
					setData(null);
					searchParams.set('type', 'posts');
					setSearchParam(searchParams);
					setIsActiveTabItem(0);
				}}
				className={`inline-block md:block md:my-1 ${
					isActiveTabItem === 0 && 'search-list-item'
				} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}
			>
				Posts
			</div>
			<div
				onClick={() => setIsActiveTabItem(1)}
				className={`inline-block md:block md:my-1 ${
					isActiveTabItem === 1 && 'search-list-item'
				} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}
			>
				Podcasts
			</div>
			<div
				onClick={() => setIsActiveTabItem(2)}
				className={`inline-block md:block md:my-1 ${
					isActiveTabItem === 2 && 'search-list-item'
				} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}
			>
				People
			</div>
			<div
				onClick={() => {
					setData(null);
					searchParams.set('type', 'tags');
					setSearchParam(searchParams);
					setIsActiveTabItem(3);
				}}
				className={`inline-block md:block md:my-1 ${
					isActiveTabItem === 3 && 'search-list-item'
				} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}
			>
				Tags
			</div>
			<div
				onClick={() => setIsActiveTabItem(4)}
				className={`inline-block md:block md:my-1 ${
					isActiveTabItem === 4 && 'search-list-item'
				} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}
			>
				Comments
			</div>
			<div
				onClick={() => {
                    setData(null);
					searchParams.set('type', 'myposts');
					setSearchParam(searchParams);
                    setIsActiveTabItem(5)}}
				className={`inline-block md:block md:my-1 ${
					isActiveTabItem === 5 && 'search-list-item'
				} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}
			>
				My posts only
			</div>
		</div>
	);
	return (
		<FooterLayout>
			<div className="container max-w-screen-2xl mx-auto mt-14 md:py-2 md:px-1 lg:px-28 bg-white-smoke  w-full overflow-x-hidden">
				<div className=" py-4 min-h-screen lg:px-24">
					<form className="md:hidden w-full h-auto px-2">
						<input
							id="search-field"
							name="search"
							type="text"
							autoComplete="text"
							className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Search..."
						/>
					</form>
					<div className="flex items-center md:justify-between px-2">
						<span className="md:inline-block hidden text-[22px] font-semibold md:text-3xl">Search Result</span>
						<div className="flex items-center justify-center gap-x-2 mt-4 md:mt-0">
							<button
								onClick={() => {
									searchParams.set('sort', '');
									setSearchParam(searchParams);
									setIsActiveTab(0);
								}}
								className={`inline-block  ${isActiveTab === 0 && 'search-tab'} px-3 py-2`}
							>
								Most Relevant
							</button>
							<button
								onClick={() => {
									searchParams.set('sort', 'desc');
									setSearchParam(searchParams);
									setIsActiveTab(1);
								}}
								className={`inline-block  ${isActiveTab === 1 && 'search-tab'} px-3 py-2`}
							>
								Newest
							</button>
							<button
								onClick={() => {
									searchParams.set('sort', 'asc');
									setSearchParam(searchParams);
									setIsActiveTab(2);
								}}
								className={`inline-block  ${isActiveTab === 2 && 'search-tab'} px-3 py-2`}
							>
								Oldest
							</button>
						</div>
					</div>
					<div className="flex flex-col md:flex-row md:mt-6">
						<div className="md:w-[230px] ">{renderTabList()}</div>
						<div className="md:flex-1">{renderComponents()}</div>
					</div>
				</div>
			</div>
		</FooterLayout>
	);
};

export default Search;
