import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../api/authApi";
import { login } from "../app/authSlice";
import Logo from '../assest/logo.png'
import LoginForm from "../components/Auth/LoginForm";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
const Login = () => {

  let navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(false);
  const dispatch = useDispatch();

    const handleSubmitForm = async (data) => {
      setIsLoading(true);
        try {
          const action = login(data);
          const resultAction = await dispatch(action);
          unwrapResult(resultAction);
            console.log(resultAction);
            navigate("/");
            setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      }
  

  return (
    <>
    <div className="container  mx-auto md:px-16 flex min-w-[100vw] justify-center bg-white-smoke text-black min-h-[90vh]">
         <div className="flex items-center justify-center w-full md:w-[700px] border-2 border-gray-200 drop-shadow-md rounded-md bg-white h-full px-6 flex-col">
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
    
    <Footer />

    </>
  );
};

export default Login;
