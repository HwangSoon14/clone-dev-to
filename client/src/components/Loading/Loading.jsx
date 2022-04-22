import React from 'react';

const Loading = () => {



return (
    <div className='absolute w-full h-full flex items-center justify-center'>
    <div className='absolute w-full h-full bg-gray blur-lg'></div>
        <div className="fade-loading z-30"></div>
    </div>
);
};

export default Loading ;