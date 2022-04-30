import React from 'react';
import FooterLayout from '../components/Layout/FooterLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup.object().shape({
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter as least as 6 character"),
    retypePassword: yup
      .string()
      .required("Please enter Retype Password")
      .oneOf([yup.ref("password")], "Not correct , please enter again"),
  });
const NewPassword = () => {
   
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
      });

      const onSubmitForm = (data) => {
          console.log(data);
      }

    return (
        <FooterLayout>

		<div className="w-full-screen h-auto bg-white-smoke mt-14 md:px-2 md:py-2 lg:px-48 lg:py-4">
			<div className="w-full h-full bg-white pl-3 py-4 md:border-2 md:border-gray-200 md:rounded-lg md:p-12 lg:px-16">
				<h1 className="font-semibold text-2xl mb-3 text-center">Enter new password</h1>

                <form className="mt-8 space-y-6 px-4 md:w-[450px] md:mx-auto" action="#" method="POST" onSubmit={handleSubmit(onSubmitForm)}>
              <input type="hidden" name="remember" defaultValue="true" />
             
              <div>
                  <label htmlFor="password" className="block text-[14px] font-bold mb-2">
                    Password
                  </label>
                  <input
                  {...register("password")}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password..."
                  />
                  <p  className='error-msg mt-1'>{errors.password?.message}</p>
                </div>

                <div>
                  <label htmlFor="retypePassword" className="block text-[14px] font-bold mb-2">
                    Retype Password
                  </label>
                  <input
                  {...register("retypePassword")}
                    id="retypePassword"
                    name="retypePassword"
                    type="password"
                    autoComplete="retypePassword"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Retype Password..."
                  />
                  <p  className='error-msg mt-1'>{errors.retypePassword?.message}</p>
                </div>



              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                  Register
                </button>
              </div>
            </form>
			</div>
		</div>
       
        </FooterLayout>
    );
};

export default NewPassword;