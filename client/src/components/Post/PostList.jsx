import React from 'react';
import Post from './Post';
const PostList = ({data}) => {
    return (
        <div className='flex flex-col gap-y-2'>
            {data.map((post , idx) => (
                idx === 0 ? <Post key={idx} post={post} type/> : <Post key={idx} post={post}/>
            ))}
        </div>
    );
};
export default PostList;