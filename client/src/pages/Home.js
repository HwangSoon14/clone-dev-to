import React from 'react';
import PostList from '../components/Post/PostList';
import TabSide from '../components/Tab/TabSide';
import TagSide from '../components/TagSide/TagSide';

const Home = () => {
    return (
       <div className='bg-[#F5F5F5]'>
            <div className='container max-w-screen-2xl mt-14 mx-auto md:py-2 md:px-1 lg:px-28min-h-screen w-full overflow-x-hidden'>
            <div className="w-full h-full flex flex-col md:flex-row">
                <TabSide />
                <PostList />
                <TagSide />
            </div>
        </div>
       </div>
    );
};

export default Home;