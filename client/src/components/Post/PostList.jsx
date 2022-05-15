import React from 'react';
import { dummyPost as Posts} from '../../dummy-tab';
import Post from './Post';
const PostList = ({data}) => {
    return (
        <div className='flex flex-col gap-y-2'>
            {Posts.map((post , idx) => (
                <Post key={idx} post={post}/>
            ))}
        </div>
    );
};
export default PostList;