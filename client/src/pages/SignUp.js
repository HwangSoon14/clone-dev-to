import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authApi from '../api/authApi';
import Logo from '../assest/logo.png'
import SignUpForm from '../components/Auth/SingUpForm';
import Footer from '../components/Footer/Footer';
import FooterLayout from '../components/Layout/FooterLayout';
import Loading from '../components/Loading/Loading';

const SignUp = () => {
  const user = useSelector(state => state.auth.current_user)

    const [isLoading , setIsLoading] = useState(false);
    let navigate = useNavigate();

    const handleSubmitForm = async (data) => {
        try {
          setIsLoading(true);
            const res = await authApi.register(data);
            navigate("/sign-in");
            toast.success(res.message);
            setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      }


      useEffect(() => {
        if(Object.keys(user).length > 0) return navigate('/');
      }, [])
      
      return (
        

   <FooterLayout>

        <div className="container pt-[75px] mx-auto md:px-16 sm:pb-4 flex max-w-full justify-center bg-gray-100 text-black min-h-[70vh] ">
             <div className="flex items-center justify-center w-full md:w-[700px] border-[1px] border-gray-200 md:shadow-sm rounded-md bg-white h-full px-6 flex-col">
            <span className="block font-bold text-[1.3rem] mt-4 mb-2 lg:text-[28px] lg:mt-10">
              Welcome to DEV Community
            </span>
            <p className="text-center text-[14px] font-medium text-gray-600">
              <Link to="/">
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
                    Create a new account
                  </h2>
                </div>
                
              </div>
             <SignUpForm onSubmit={handleSubmitForm} /> 
            <p className='pb-6'>You already an account ? <Link to="/sign-in"><span className='auth-link'>Sign In</span></Link></p>
            </div>

            {isLoading && <Loading />}

        </div>
      </FooterLayout>


       )
};

export default SignUp;