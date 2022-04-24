import axiosClient from './axiosClient';

const authApi = {
	register(data) {
		const url = '/api/v1/auth/register';
		return axiosClient.post(url, { ...data });
	},

	login(data) {
		const url = '/api/v1/auth/login';
		return axiosClient.post(url, { ...data });
	},
	refresh_token() {
		const url = 'api/v1/auth/refresh';
		return axiosClient.post(url, {
			withCredentials: true,
		});
	},
};
export default authApi;
