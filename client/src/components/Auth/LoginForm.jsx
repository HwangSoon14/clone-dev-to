import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AppRoutes } from '../../routing/AppRoutes';

const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email !")
      .email("Please enter a valid email!"),
    password: yup.string().required("Please enter your password !").min(6, "Please enter as least as 6 letter"),
  });


const LoginForm = (props) => {
    const {onSubmit} = props;
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
      });
      
      const onSubmitForm = (data) => {
          if(!onSubmit) return;
          onSubmit(data);
      }



    return (
        <div className="w-full pb-8 px-4">
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmitForm)}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm flex flex-col gap-y-4">
                <div>
                  <label htmlFor="email" className="block text-[14px] font-bold mb-2">
                    Email address
                  </label>
                  <input
                  {...register("email")}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email..."
                  />
                  <p  className='error-msg mt-1'>{errors.email?.message}</p>
                </div>
                <div>
                  <label htmlFor="password" className="block text-[14px] font-bold mb-2">
                    Password
                  </label>
                  <input
                  {...register("password")}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <p className='error-msg mt-1'>{errors.password?.message}</p>
                </div>
              </div>

                <div className="text-sm flex justify-end">
                  <Link
                    to={AppRoutes.FORGOT_PASSWORD}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
    );
};

export default LoginForm;