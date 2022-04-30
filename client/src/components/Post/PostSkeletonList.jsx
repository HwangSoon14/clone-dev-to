import React from 'react';
import PostSkeleton from './PostSkeleton';



const PostSkeletonList = () => {
    return (
        <div className='flex flex-col gap-y-2 flex-1 md:p-1 lg:p-2'>
            <PostSkeleton />
            <PostSkeleton />
        </div>
    );
};
export default PostSkeletonList;