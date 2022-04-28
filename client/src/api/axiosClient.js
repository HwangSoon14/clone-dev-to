import axios from "axios";
import jwt_decode from 'jwt-decode'
import authApi from "./authApi";
const axiosClient = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-type': 'application/json',
    },

});

//Interceptors
// Add a request interceptor
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
    return config;

  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    
    return response.data;
  }, 
    function (error) {
   
  });

export default axiosClient;