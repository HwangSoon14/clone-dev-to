import React from 'react';
import PostList from '../components/Post/PostList';
<<<<<<< HEAD
import Tab from '../components/Tab/Tab';
=======
import TabSide from '../components/Tab/TabSide';
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4

const Home = () => {



    return (
<<<<<<< HEAD
        <div className='container max-w-screen-2xl mx-auto md:px-8 lg:px-28 p-2 bg-white-smoke min-h-screen w-full overflow-x-hidden'>
            <div className="w-full h-full flex flex-col md:flex-row">
                <Tab />
=======
        <div className='container max-w-screen-2xl mx-auto md:p-2 md:px-1 lg:px-28 bg-white-smoke min-h-screen w-full overflow-x-hidden'>
            <div className="w-full h-full flex flex-col md:flex-row">
                <TabSide />
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4
                <PostList />
            </div>
        </div>
    );
};

export default Home;