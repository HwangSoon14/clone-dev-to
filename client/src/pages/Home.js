import React, { useState , useEffect} from 'react';
import PostList from '../components/Post/PostList';
import TabSide from '../components/Tab/TabSide';
import TagSide from '../components/TagSide/TagSide';
import PostSkeletonList from '../components/Post/PostSkeletonList';
import { useSearchParams } from 'react-router-dom';
const Home = () => {

    const [isActive , setIsActive] = useState("Relevant");
    const [isLoading  , setIsLoading] = useState(false)
    const [isActiveTop , setIsActiveTop] = useState("Week");
    const [listPostData , setListPostData] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
   
    

    const activeButton = (text) => {
        setIsActive(text);
    }    
    const activeButtonTop = (text) => {
        setIsActiveTop(text);
    }    
    
    const renderTabButton = () => (
            <>
                <button onClick={() => {
                        activeButton("Relevant")
                    }} className={`inline-block px-4 py-3 ${isActive === "Relevant" ? 'active-main-tab' : ''} main-tab-hover`}>Relevant</button>
                    <button onClick={() => {
                        activeButton("Latest")
                    }} className={`inline-block px-4 py-3 ${isActive === "Latest" ? 'active-main-tab' : ''} main-tab-hover`}>Latest</button>
                    <button onClick={() => {
                        activeButton("Top")
                    }} className={`inline-block px-4 py-3 ${isActive === "Top" ? 'active-main-tab' : ''} main-tab-hover`}>Top</button>
            </>
    ) 
    const renderTabTopButton = () => (
            <>
                <button onClick={() => {
                        activeButtonTop("Week")
                    }} className={`inline-block px-4 py-3 ${isActiveTop === "Week" ? 'active-main-tab' : ''} main-tab-hover`}>Week</button>
                    <button onClick={() => {
                        activeButtonTop("Month")
                    }} className={`inline-block px-4 py-3 ${isActiveTop === "Month" ? 'active-main-tab' : ''} main-tab-hover`}>Month</button>
                    <button onClick={() => {
                        activeButtonTop("Year")
                    }} className={`inline-block px-4 py-3 ${isActiveTop === "Year" ? 'active-main-tab' : ''} main-tab-hover`}>Year</button>
                    <button onClick={() => {
                        activeButtonTop("Infinity")
                    }} className={`inline-block px-4 py-3 ${isActiveTop === "Infinity" ? 'active-main-tab' : ''} main-tab-hover`}>Infinity</button>
            </>
    ) 

    return (
       <div className='bg-[#F5F5F5]'>
            <div className='container max-w-screen-2xl mt-14 mx-auto md:py-2 md:px-1 lg:px-28min-h-screen w-full overflow-x-hidden'>
            <div className="w-full h-full flex flex-col md:flex-row">
                <TabSide />
                <div className='flex flex-col flex-1 md:p-1 lg:p-2'>
                <div className='mt-2 mb-2 flex flex-col lg:flex-row lg:items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                    {renderTabButton()}
                </div>
                {isActive === "Top" && <div className='mr-2 flex items-center gap-x-2 '>
                    {renderTabTopButton()}
                </div>}
                </div>
                 {isLoading ? <PostSkeletonList /> : <PostList data={listPostData}/>}
                </div>
                <TagSide />
            </div>
        </div>
       </div>
    );
};

export default Home;