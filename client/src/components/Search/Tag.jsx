import React from 'react';

const Tag = ({tag}) => {
    return (
        <div className='p-4 bg-white border-t-2 border-b-2 border-gray-200 flex md:border-2 md:rounded-lg'>
            <div className='mr-3 md:mr-5'>
                <div className='py-2 font-medium px-[14px]  rounded-lg text-2xl flex items-center justify-center' style={{backgroundColor: tag.color}}>#</div>
            </div>
            <div className='flex-1 mt-2'>
                <span className='block font-semibold mb-2 md:text-lg'>{tag?.title}</span>
                <span className='block leading-6 md:leading-7 tracking-wider md:tracking-widest text-[14px]'>{tag?.description}</span>
            </div>
        </div>
    );

};

export default Tag;