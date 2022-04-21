import React from 'react';
import { dummyPost as Posts} from '../../dummy-tab';
import Post from './Post';
const PostList = () => {
    return (
<<<<<<< HEAD
        <div className='flex flex-col gap-y-2 w-[50%] p-[1rem]'>
=======
        <div className='flex flex-col gap-y-2 flex-1 md:p-1 lg:p-2'>
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4
            {Posts.map((post , idx) => (
                <Post key={idx} post={post}/>
            ))}
        </div>
    );
};
<<<<<<< HEAD

=======
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4
export default PostList;