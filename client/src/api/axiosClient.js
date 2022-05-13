import axios from 'axios';
import authApi from './authApi';
const axiosClient = axios.create({
	baseURL: 'http://localhost:5000',
	withCredentials: true,
	headers: {
		'Content-type': 'application/json',
	},
});

//Interceptors
// Add a request interceptor

axiosClient.interceptors.request.use(
	async function (config) {
		if (config.url.indexOf('/refresh') >= 0) {
			return config;
		}
		const user = JSON.parse(localStorage?.getItem('current_user'));
		const access_token = user?.access_token;
		// Do something before request is sent
		if (access_token) {
			config.headers['Authorization'] = access_token;
		}

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response?.data;
	},
	async function (error) {
		const originalRequest = error.config;

		if (error.response) {
			if (error.response.status === 401 && !originalRequest._retry) {
				originalRequest._retry = true;
				try {
					const res = await authApi.refresh_token();
					const access_token = res.access_token;
					const user = JSON.parse(localStorage?.getItem('current_user'));
					localStorage.setItem(
						'current_user',
						JSON.stringify({
							...user,
							access_token: access_token,
						}),
					);
					axios.defaults.headers.common['Authorization'] = access_token;
					console.log('error while call api to refresh_token');
					return axiosClient(originalRequest);
				} catch (error) {
					if (error.response && error.response.data) {
						return Promise.reject(error.response.data);
					}
					return Promise.reject(error);
				}
			}
			if (error.response.data.message === 'jwt expired' && error.response.status === 500) {
				window.location = '/sign-in';
				console.log('error when token expires');
				localStorage.removeItem('current_user');
				return Promise.reject(error);
			}
			if (error.response && error.response.data && error.response.status !== 401) {
				console.log('error another status like 403 , 400... ', error.response.data);
				return Promise.reject(error.response.data);
			}
		}
		console.log('another error response');

		return Promise.reject(error);
	},
);

export default axiosClient;
