import axios from "axios";
<<<<<<< HEAD
import jwt_decode from 'jwt-decode'
import authApi from "./authApi";
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-type': 'application/json',
    },
=======
import authApi from "./authApi";

import Cookies from 'js-cookie'

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
    },
    
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7

});

//Interceptors
// Add a request interceptor
<<<<<<< HEAD
axiosClient.interceptors.request.use(async function (config) {

// Do something before request is sent
  if(config.url.indexOf('/login') >= 0 || config.url.indexOf('/refresh') >= 0 ||  config.url.indexOf('/register')  >= 0) {
    return config;
  }
  let date = new Date();
  const user = JSON.parse(localStorage.getItem("current_user"));
  const decodedToken = jwt_decode(user.access_token);
  if(user.access_token) {
    config.headers.Authorization = user.access_token;
    return config;
  }
  else if (decodedToken.exp < date.getTime() / 1000 || !user.access_token)
   {
        const data = await authApi.refresh_token();
        const access_token = data.access_token;
        console.log("here is running")
      localStorage.setItem("current_user",  JSON.stringify({...user,access_token}))
      config.headers.Authorization = access_token;
      return config;
  }

  

    
   
    
    // }
=======



axiosClient.interceptors.request.use(async function (config) {
  if(config.url.indexOf("/refresh") >= 0) {
    return config;
  }
  const user = JSON.parse(localStorage?.getItem("current_user"));
  const  access_token  = user?.access_token;
// Do something before request is sent
    if(access_token) {
      config.headers['Authorization'] = access_token;
    }
   console.log(Cookies.get('refresh_token'))
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
    return config;

  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    
<<<<<<< HEAD
    return response.data;
  }, 
    function (error) {
   
=======
    return response?.data;
  }, 
    async function (error) {
      const originalRequest = error.config;
      console.log("error in refresh token",{error})
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const res = await authApi.refresh_token();
        const access_token = res.access_token;
        const user = JSON.parse(localStorage?.getItem("current_user"));
        localStorage.setItem("current_user", JSON.stringify({
          ...user,
          access_token: access_token,
        }))
        axios.defaults.headers.common['Authorization'] = access_token;
        return axiosClient(originalRequest);
      }
      if(error.response.data.message === "jwt expired" && error.response.status === 500) {
        window.location = '/sign-in';
        localStorage.removeItem("current_user");
      }
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
  });

export default axiosClient;