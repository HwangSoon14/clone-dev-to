import axiosClient from './axiosClient';
// import axios from 'axios'
const userApi = {
	getUserInfo(userName) {
		const url = `/api/v1/users/${userName}`;
		return axiosClient.get(url);
	},
    getPostsByUserId(userId) {
        const url = `/api/v1/users/${userId}/posts`;
		return axiosClient.get(url);
	},
    }
export default userApi;
