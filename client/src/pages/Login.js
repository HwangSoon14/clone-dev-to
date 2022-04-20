import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assest/logo.png'
import LoginForm from "../components/Auth/LoginForm";
const Login = () => {


  const handleSubmitForm = (data) => {
    console.log("Submit form data:",data);
  }

  return (
    <div className="container mx-auto md:px-16 py-8 flex min-w-[100vw] justify-center bg-white-smoke text-black min-h-[90vh]">
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
    </div>
  );
};

export default Login;
