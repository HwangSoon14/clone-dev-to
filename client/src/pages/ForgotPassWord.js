import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import FooterLayout from '../components/Layout/FooterLayout';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter valid email"),
  });

const ForgotPassWord = () => {

 
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
      });

      const onSubmitForm = (data) => {
        console.log(data);
      }


    return (
        <FooterLayout>
            <div className='w-full-screen h-auto bg-white-smoke mt-14 md:px-2 md:py-2 lg:px-48 lg:py-4'>
                <div className='px-4 py-3 bg-white w-full h-full sm:w-[65%] md:w-[50%] lg:w-[500px] sm:mx-auto  border-y-2 mb-24 lg:mb-48 sm:rounded-lg border-gray-200 drop-shadow-sm relative mt-20'>
                    <h2 className='text-2xl font-semibold text-center'>Forgot your password ?</h2>
                    <form className='mt-6 px-4' onSubmit={handleSubmit(onSubmitForm)}>
                    <label htmlFor="forgot" className='block my-2 font-medium text-sm'>
							Email
						</label>
						<input
                  {...register("email")}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                  />
                  <p  className='error-msg mt-2'>{errors.email?.message}</p>
                    </form>
                    <div className='w-[90%] mx-auto my-3 py-2 rounded-lg bg-secondary-color text-white font-semibold text-sm'>
                        <button className='w-full h-full '>Send me reset password instructions</button>
                    </div>
                </div>
                
            </div>
        </FooterLayout>
    );
};

export default ForgotPassWord;