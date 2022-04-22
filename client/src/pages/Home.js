import React from 'react';
import PostList from '../components/Post/PostList';
import TabSide from '../components/Tab/TabSide';

const Home = () => {
    return (
        <div className='container max-w-screen-2xl mx-auto md:p-2 md:px-1 lg:px-28 bg-white-smoke min-h-screen w-full overflow-x-hidden'>
            <div className="w-full h-full flex flex-col md:flex-row">
                <TabSide />
                <PostList />
                {/* <PostSkeletonList /> */}
            </div>
        </div>
    );
};

export default Home;