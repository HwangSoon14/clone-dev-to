import React from 'react';

const Post = ({post}) => {
    console.log(post);
    return (
        <div className='w-full pb-4 drop-shadow-sm flex flex-col bg-white border-2 border-gray-200 rounded-lg'>
          {post.image &&  <div className='w-full h-[275px]'>
                {/* <img src={post?.image} alt="img post" className='w-full h-full object-cover'></img> */}
                <img src={post.image} alt="img post" className='w-full h-full object-cover'></img>
                
            </div>
        } 
            <div className='flex flex-1 px-5 pt-7 pb-2'>
                <div className='flex items-center justify-center'>
                    <img className='inline-block border-2 border-gray-300 w-[35px] h-[35px] object-cover rounded-[50%]' src={post.avatar} alt="avatar" />
                </div>
                <div className='ml-2'>
                    <span className='block font-bold text-[14px] text-gray-700'>{post.username}</span>
                    <span className='block text-[12px] font-thin text-gray-500'>{post.date}</span>
                </div>
            </div>
            <div className='mx-8 px-8'>
                <h1 className='font-bold text-2xl'>{post.title}</h1>
                <div className='flex items-center gap-x-4    my-2'>
                    {post.tabList.map((tag , idx) => (
                        <div key={idx} className='font-thin text-[14px] hover:bg-purple-100 rounded-lg py-1 px-[6px] border-[1.6px] border-white hover:border-purple-300'>
                        <span className='inline-block text-blue-500 text-[12px]'>#</span>
                           {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Post;