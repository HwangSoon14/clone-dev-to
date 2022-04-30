import axios from 'axios';
import axiosClient from './axiosClient';
const baseUrl = '/api/v1/auth';
const authApi = {
	register(data) {
		const url = `${baseUrl}/register`;
		return axiosClient.post(url, { ...data });
	},

	login(data) {
		const url = `${baseUrl}/login`;
		return axiosClient.post(url, { ...data });
	},
	refresh_token() {
		const url = `${baseUrl}/refresh`;
		return axiosClient.post(url ,{credentials: 'include'});
	},
	log_out() {
		const url  = `${baseUrl}/log_out`;
		return axiosClient.post(url , { credentials: 'include'});
	}
};
export default authApi;
