import React from "react";
import dayjs from "dayjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '../../assest/avatar.jfif'

const Post = ({ post }) => {
  
  const [tooltipStatus, setTooltipStatus] = useState(0);
  
  return (

  <div className="relative">

    <div className="w-full pb-4 drop-shadow-sm flex flex-col bg-white  border-2 border-gray-200 rounded-lg  ">
      {post.content?.image && (
        <div className="w-full h-[275px]">
          <img
            src={post.userId.avatar}
            alt="img post"
            className="w-full h-full object-cover bg-center"
          ></img>
        </div>
      )}
      <div className="">
      <Link to={`/profile/${post.userId.userName}`} className="flex flex-1 px-5 pt-7 pb-2">
      <div className="flex items-center justify-center" onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)} >
          <img
            className="inline-block border-2 border-gray-300 w-[35px] h-[35px] object-cover rounded-[50%]"
            src={post.userId.avatar}
            alt="avatar"
          />
        </div>
        <div className="ml-2">
          <span className="block font-bold text-[14px] text-gray-700 hover:bg-gray-100 px-2 rounded-md">
            {post.userId.userName}
          </span>
          <span className="block text-[12px] font-thin text-gray-500 px-2">
          {dayjs(post.createdAt).format('DD-MM YYYY')}
          </span>
        </div>
      </Link>
        
      </div>
      <div className="mx-2 px-3 md:mx-8 md:px-8">
        <Link to={`/${post.userId.userName}/${post.slug}`}><h1 className="font-bold text-xl  md:text-2xl hover:text-purple-900 cursor-pointer">{post.title}</h1></Link>
        <div className="flex items-center  gap-x-2 md:gap-x-4 my-2">
          {post.tags.map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center font-thin text-[12px] cursor-pointer md:text-[14px] hover:bg-purple-100 rounded-lg py-1 md:px-[6px] border-[1.6px] border-white hover:border-purple-300"
            >
              <span className="inline-block text-blue-500 text-[10px] ">#</span>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mx-2 px-2 md:mx-4 md:px-2">
          {/* Reaction */}
          <div className="p-1 md:ml-10 rounded-lg flex items-center justify-center font-thin text-[14px] mr-6 hover:bg-gray-200">
            <div>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <Link to={`/${post.userId._id}/${post.slug}`}>
            <span className="inline-block ml-2 text-gray-500 cursor-pointer">
              {post.likes.length} <span className="hidden md:inline-block">reactions</span>
            </span>
            </Link>
          </div>

          {/* Comment */}
          <div className="flex hover:bg-gray-200 p-1 rounded-lg items-center justify-center font-thin text-[14px]">
            <div className="">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
            </div>
            <Link to={`/${post.userId._id}/${post.slug}`}>

            <span className="inline-block ml-2 text-gray-500 cursor-spointer">
              {post.comments.length} <span className="hidden md:inline-block">comments</span>
            </span>
            </Link>
          </div>

          <div className="flex ml-auto items-center justify-center ">
              <span className="inline-block text-gray-500 font-thin text-[12px]">2 min read</span>
              <button className="p-2 text-center bg-slate-300 hover:bg-slate-400 text-gray-600 rounded-lg ml-3">Save</button>
          </div>
        </div>
    </div>
            
            {tooltipStatus === 1 && (
              <div className="absolute top-[50px] left-[45px] text-base w-[300px] h-[auto] bg-transparent z-50" onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                <div className="w-[90%] h-[90%] bg-white mx-auto rounded-lg drop-shadow-lg overflow-hidden pb-4">
                  <div className="relative top-0 left-0 right-0 h-[35px] bg-black"></div>
                  <div className="flex relative">
                    <div className="w-[50px] h-[50px] translate-y-[-50%] relative left-2">
                      <img className="w-full h-full object-cover rounded-full" src={Avatar} alt="avt"></img>
                    </div>
                    <span className="font-bold ml-4 text-[18px]">Elsaaa</span>
                  </div>
                  <div className="w-full h-auto flex items-center justify-center">
                    <button className="main-btn w-[90%] h-full">
                      Follow
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm my-4 px-2">hiii! I love to speak with people !</p>
                  <ul className="px-2">
                      <li>
                        <span className="block font-semibold">Location</span>
                        <span className="block text-sm">England , Stockholm</span>
                      </li>
                  </ul>
                </div>
              </div>
            )}
    </div>

    

  );
};

export default Post;
