import React from 'react';
import Post from './Post';
const PostList = ({data}) => {
    return (
        <div className='flex flex-col gap-y-2'>
            {data.map((post , idx) => (
                <Post key={idx} post={post}/>
            ))}
        </div>
    );
};
export default PostList;