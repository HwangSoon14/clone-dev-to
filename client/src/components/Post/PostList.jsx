import React from 'react';
import { dummyPost as Posts} from '../../dummy-tab';
import Post from './Post';
const PostList = () => {
    return (
        <div className='flex flex-col gap-y-2 w-[50%] p-[1rem]'>
            {Posts.map((post , idx) => (
                <Post key={idx} post={post}/>
            ))}
        </div>
    );
};

export default PostList;