import React from 'react';
import { Link } from 'react-router-dom';
import TagItem from './TagItem';

const TagList = (props) => {

    const {data} = props;
    return (
        <div className='bg-[#fafafa] border-2 text-black my-3 px-3 py-4 border-gray-200 drop-shadow-sm rounded-lg'>
            <div className='bg-white  pt-1 pb-3'>
                <Link to="/t" className='font-bold text-lg hover:text-purple-900 transition-all'>
                        #{data.tag}
                </Link>
            </div>
            {data.postList.map((post , idx) => (
                <TagItem key={idx} post={post}/>
            ))}
        </div>
    );
};

export default TagList;