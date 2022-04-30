import axiosClient from './axiosClient';
// import axios from 'axios'
const baseUrl = '/api/v1/users';
const userApi = {
	getUserInfo(userName) {
		const url = `${baseUrl}/${userName}`;
		return axiosClient.get(url);
	},
	getPostsByUserId(userId) {
		const url = `${baseUrl}/${userId}/posts`;
		return axiosClient.get(url);
	},
	getSavedPostList() {
		const url = `${baseUrl}/posts/saved`;
		return axiosClient.get(url);
	},
};
export default userApi;
