import React from 'react';
import { Link } from 'react-router-dom';
import ForemImg from '../../assest/Forem.webp'
import { dummy_tags } from '../../dummy-tab';
import TagList from './TagList';
const TagSide = () => {
    return (
        <div className='hidden lg:block lg:w-[25%] lg:p-1 gap-y-2'>
            <div className='py-4 px-3 bg-white border-2 border-gray-200 rounded-lg'>
                <div className='w-full h-full rounded-lg overflow-hidden'>
                   <Link to="/">
                       <img  src={ForemImg} alt="forem-img"  className='w-full h-full object-cover'/>
                   </Link>
                </div>
                <Link to="/" className='block mt-2'>
                    <span className='text-md font-bold text-blue-600'>Forem for Android is here !</span>
                </Link>
            </div>
            {dummy_tags.map((data, idx) => (
                <TagList key={idx} data={data}/>
            ))}
        </div>
    );
};

export default TagSide;