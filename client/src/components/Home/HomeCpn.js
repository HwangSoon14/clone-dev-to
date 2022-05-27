import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import postApi from '../../api/postApi';
import PostList from '../Post/PostList';
import TabSide from '../Tab/TabSide';
import TagSide from '../TagSide/TagSide';

const HomeCpn = () => {

    const [isActive , setIsActive] = useState("Relevant");
    const [rightSideData , setRightSideData] = useState([]);
    const [isActiveTop , setIsActiveTop] = useState("Week");

    
   useEffect(() => {
       (async () => {
        const res = await postApi.getPopulate();
        setRightSideData(res);
       })()
   } , [])

   
    const activeButton = (text) => {
        setIsActive(text);
    }    
    const activeButtonTop = (text) => {
        setIsActiveTop(text);
    }    
    
    const renderTabButton = () => (
            <>  
                <Link to="/">
                <button onClick={() => {
                        activeButton("Relevant")
                    }} className={`inline-block px-4 py-3 ${isActive === "Relevant" ? 'active-main-tab' : ''} main-tab-hover`}>Relevant</button>
                </Link>
                    
                    <Link to="/latest">

                    <button onClick={() => {
                        activeButton("Latest")
                    }} className={`inline-block px-4 py-3 ${isActive === "Latest" ? 'active-main-tab' : ''} main-tab-hover`}>Latest</button>
                    </Link>
                    
                    <Link to="/top/week">
                    <button onClick={() => {
                        activeButton("Top")
                    }} className={`inline-block px-4 py-3 ${isActive === "Top" ? 'active-main-tab' : ''} main-tab-hover`}>Top</button>
                </Link>
            </>
    ) 
    const renderTabTopButton = () => (
            <>
                    
            <Link to="/top/week">
                <button onClick={() => {
                        activeButtonTop("Week")
                    }} className={`inline-block px-4 py-3 ${isActiveTop === "Week" ? 'active-main-tab' : ''} main-tab-hover`}>Week</button>
                            </Link>
                            <Link to="/top/month">
                   <button onClick={() => {
                        activeButtonTop("Month")
                    }} className={`inline-block px-4 py-3 ${isActiveTop === "Month" ? 'active-main-tab' : ''} main-tab-hover`}>Month</button>
                    </Link>
                    <Link to="/top/year">

                    <button onClick={() => {
                        activeButtonTop("Year")
                    }} className={`inline-block px-4 py-3 ${isActiveTop === "Year" ? 'active-main-tab' : ''} main-tab-hover`}>Year</button>
                    </Link>
                    <Link to="/top/infinity">
                    <button onClick={() => {
                        activeButtonTop("Infinity")
                    }} className={`inline-block px-4 py-3 ${isActiveTop === "Infinity" ? 'active-main-tab' : ''} main-tab-hover`}>Infinity</button>
                    </Link>
            </>
    ) 

    return (
        <div className='bg-[#F5F5F5]'>
        <div className='container max-w-screen-xl mt-14 mx-auto md:py-2 md:px-1 lg:px-28min-h-screen w-full overflow-x-hidden'>
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
            <PostList/>
            </div>
            <TagSide data={rightSideData}/>
        </div>
    </div>
   </div>
    );
};

export default HomeCpn;