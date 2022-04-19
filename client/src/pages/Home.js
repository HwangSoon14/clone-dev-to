import React from 'react';
import Tab from '../components/Tab/Tab';

const Home = () => {
    return (
        <div className='container max-w-screen-2xl mx-auto md:px-8 lg:px-28 p-2 bg-white-smoke min-h-screen w-full overflow-x-hidden'>
            <div children="w-full h-full flex items-center flex-col md:flex-row">
                <Tab />
            </div>
        </div>
    );
};

export default Home;