import { unwrapResult } from "@reduxjs/toolkit";
<<<<<<< HEAD
import React, { useState } from "react";
import { useDispatch } from "react-redux";
=======
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
import { Link, useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
import { login } from "../app/authSlice";
import Logo from '../assest/logo.png'
import LoginForm from "../components/Auth/LoginForm";
import Footer from "../components/Footer/Footer";
import FooterLayout from "../components/Layout/FooterLayout";
import Loading from "../components/Loading/Loading";
const Login = () => {

<<<<<<< HEAD
=======

  const user = useSelector(state => state.auth.current_user)
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
  let navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(false);
  const dispatch = useDispatch();

    const handleSubmitForm = async (data) => {
      setIsLoading(true);
        try {
          const action = login(data);
          const resultAction = await dispatch(action);
          unwrapResult(resultAction);
            navigate("/");
            setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      }
  
<<<<<<< HEAD
=======
      useEffect(() => {
        if(Object.keys(user).length > 0) return navigate('/');
      }, [])
      
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7

  return (

    <>
    <FooterLayout>
    <div className="container pt-20 mx-auto md:px-16 flex max-w-full justify-center bg-white-smoke text-black min-h-[90vh]">
         <div className="flex items-center justify-center w-full md:w-[700px] border-1 border-gray-200 drop-shadow-md rounded-md bg-white h-full px-6 flex-col">
        <span className="block font-bold text-[1.3rem] mt-4 mb-2 lg:text-[28px] lg:mt-10">
          Welcome to DEV Community
        </span>
        <p className="text-center text-[14px] font-medium text-gray-600">
          <Link to="/chua-biet">
            <span className="inline-block text-blue-600 mr-2">
              DEV Community
            </span>
          </Link>
          is a community of 834,207 amazing developers
        </p>


        {/* template */}
        <div className="py-4 px-4 sm:px-6">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={Logo}
                alt="logo-dev"
              />
              <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-800">
                Sign in to your account
              </h2>
            </div>
            
          </div>
          <LoginForm onSubmit={handleSubmitForm}/>
        <p className="pb-6 ">Don't have an account ? <Link to="/sign-up"><span className="auth-link">Sign up</span></Link></p>
        </div>
        {isLoading && <Loading />}

    </div>
    </FooterLayout>
    </>
  );
};

export default Login;
