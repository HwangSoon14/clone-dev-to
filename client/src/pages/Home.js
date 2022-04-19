import React from 'react';
import PostList from '../components/Post/PostList';
import Tab from '../components/Tab/Tab';

const Home = () => {



    return (
        <div className='container max-w-screen-2xl mx-auto md:px-8 lg:px-28 p-2 bg-white-smoke min-h-screen w-full overflow-x-hidden'>
            <div className="w-full h-full flex flex-col md:flex-row">
                <Tab />
                <PostList />
            </div>
        </div>
    );
};

export default Home;