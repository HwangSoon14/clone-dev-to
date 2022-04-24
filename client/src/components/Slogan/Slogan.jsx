import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
const Slogan = () => {

    const user = useSelector(state => state.auth.current_user);
    if(Object.keys(user).length >=0) return null;

    return (
        <div className="w-full border-[1px] p-[1rem] drop-shadow-sm border-gray-200 rounded-lg bg-white">
        <p className="font-bold text-[18px] leading-[30px] tracking-wide">
          <Link to="/">
            <span className="auth-link mr-1 text-[20px]">DEV Community</span>
          </Link>
          is a community of 834,300 amazing developers
        </p>

        <p className="text-gray-500 my-4">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>

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
    );
};

export default Slogan;