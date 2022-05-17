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
	createPost(data){
		const url = `${baseUrl}/posts`;
		return axiosClient.post(url, data)
	},
	savePost(id) {
		const url = `${baseUrl}/posts/${id}/save`;
		return axiosClient.post(url)
	},
	unsavePost(id) {
		const url = `${baseUrl}/posts/${id}/unsave`;
		return axiosClient.delete(url)
	}

};
export default userApi;
