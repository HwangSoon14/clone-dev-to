import axiosClient from './axiosClient';
// import axios from 'axios'
const baseUrl = '/api/v1/uploads';
const uploadApi = {
	uploadSingle(body) {
		const url = `${baseUrl}/single`;
		return axiosClient.post(url, body);
	}
};
export default uploadApi;
