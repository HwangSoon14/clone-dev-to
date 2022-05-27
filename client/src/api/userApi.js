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
	getSavedPostList(text) {
		const url = !text ? `${baseUrl}/posts/saved` : `${baseUrl}/posts/saved?q=${text}`;
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
	},
	followUsers(userId) {
		const url = `${baseUrl}/${userId}/follow`;
		return axiosClient.post(url)
	},
	unfollowUsers(userId) {
		const url = `${baseUrl}/${userId}/unfollow`;
		return axiosClient.post(url)
	},



};
export default userApi;
