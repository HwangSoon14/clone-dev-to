import React from 'react';
import LoadingGif from '../../assest/LoadingGif.gif'
const Loading = () => {



return (
    <div className='fixed top-0 bg-url left-0 right-0 bottom-0 flex items-center justify-center flex-col animate-slide bg-black'>
        <div className='w-[full] h-[300px]'>
            <img alt='loading-gif' src={LoadingGif} className="w-full h-full object-contain"></img>
        </div>
        <div className='text-xl font-bold animate-bounce text-white'>Loading . . .</div>
    </div>
);
};

export default Loading ;