import React, { useState } from 'react';
import FooterLayout from '../components/Layout/FooterLayout';
import Post from '../components/Post/Post'
import {dummyPost} from '../dummy-tab/index'


const Search = () => {


    const [isActiveTab , setIsActiveTab] = useState(0);
    const [isActiveTabItem , setIsActiveTabItem] = useState(0);


    const renderTabList = () => (
        <div className='flex flex-nowrap mt-2 mb-3 items-center gap-x-2 overflow-x-scroll md:flex-col md:items-start md:mr-4'>
                        <div onClick={() => setIsActiveTabItem(0)} className={`inline-block md:block md:my-1 ${isActiveTabItem === 0 && 'search-list-item'} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}>Posts</div>
                        <div onClick={() => setIsActiveTabItem(1)} className={`inline-block md:block md:my-1 ${isActiveTabItem === 1 && 'search-list-item'} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}>Podcasts</div>
                            <div onClick={() => setIsActiveTabItem(2)} className={`inline-block md:block md:my-1 ${isActiveTabItem === 2 && 'search-list-item'} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}>People</div>
                            <div onClick={() => setIsActiveTabItem(3)} className={`inline-block md:block md:my-1 ${isActiveTabItem === 3 && 'search-list-item'} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}>Tags</div>
                            <div onClick={() => setIsActiveTabItem(4)} className={`inline-block md:block md:my-1 ${isActiveTabItem === 4 && 'search-list-item'} px-3 py-2 hover:text-main-color cursor-pointer hover:bg-white transition-all md:w-full`}>Comments</div>
                        </div>
    )


    const renderPosts = (postList) => (
            <div>
                {postList?.map((post,idx)=>(
                    <div  key={idx} className="md:my-2">
                    <Post post={post}/>
                    </div>
                ))}
            </div>
    )

	return (
		<FooterLayout>
			<div className="container max-w-screen-xl mx-auto mt-14 md:py-2 md:px-1 lg:px-28 bg-white-smoke  w-full overflow-x-hidden">
				<div className="px-2 py-4 min-h-screen lg:px-24"><z></z>
					<form className='md:hidden w-full h-auto'>
                        <input
							id="search-field"
							name="search"
							type="text"
							autoComplete="text"
							className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Search..."
						/>
                    </form>
                    <div className='flex items-center md:justify-between'>
                         <span className="md:inline-block hidden text-[22px] font-semibold md:text-3xl">
                         Search Result
				        </span>
                        <div className='flex items-center justify-center gap-x-2 mt-4 md:mt-0'>
                            <button onClick={() => setIsActiveTab(0)} className={`inline-block  ${isActiveTab === 0 && 'search-tab'} px-3 py-2`}>Most Relevant</button>
                            <button onClick={() => setIsActiveTab(1)} className={`inline-block  ${isActiveTab === 1 && 'search-tab'} px-3 py-2`}>Newest</button>
                            <button onClick={() => setIsActiveTab(2)} className={`inline-block  ${isActiveTab === 2 && 'search-tab'} px-3 py-2`}>Oldest</button>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:mt-6'>
                        <div className='md:w-[230px] '>
                            {renderTabList()}
                        </div>
                        <div className='md:flex-1'>
                             {renderPosts(dummyPost)}
                        </div>
                    </div>
				</div>
			</div>
		</FooterLayout>
	);
};

export default Search;
