import React from 'react';
import { Link } from 'react-router-dom';

const TagItem = (props) => {

    const { post } = props;

    return (
        <div className='px-2 py-4 bg-transparent hover:bg-white transition-all duration-200 ease-linear border-t-2 border-b-2 border-gray-100'>
            <p className='text-gray-600 font-normal text-sm leading-7 hover:text-purple-800'>
                <Link to="/">{post.title}</Link>
            </p>
            
            <span className='block text-xs text-gray-400 tracking-wider'>{post.comments} comments</span>
        </div>
    );
};

export default TagItem;