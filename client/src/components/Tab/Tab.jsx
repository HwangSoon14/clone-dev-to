import React from 'react';
import { Link } from 'react-router-dom';
import {routeTab} from '../../dummy-tab/index'
const Tab = () => {
    return (
        <div className='w-[23%] p-[1rem] '>
            <div className='w-full  X border-[1px] p-[1rem] drop-shadow-sm border-gray-200 rounded-lg bg-white'>
            <p className='font-bold text-[18px] leading-[30px] tracking-wide'>
                <Link to="/"><span className='auth-link mr-1 text-[20px]'>DEV Community</span></Link>
                is a community of 834,300 amazing developers

            </p>
            
            <p className='text-gray-500 my-4'>We're a place where coders share, stay up-to-date and grow their careers.</p>
            
            <div className="mt-2">
                <Link to="/sign-up">
                <button className="main-btn w-full">Create account</button>
             </Link>
            </div>
            <div className="mt-[3px]">
                <Link to="/sign-in">
                <button className="secondary-btn w-full">Log in</button>
             </Link>
            </div>
           
        </div>
        
        <div className='w-full py-4'>
            {routeTab.map((item, idx) => (
                <div className='route-tab' key={idx}>
                    <>{item.icon}</>
                    <span className='ml-2 inline-block'>{item.name}</span>
                </div>
            ))}
        </div>

        </div>
    );
};

export default Tab;