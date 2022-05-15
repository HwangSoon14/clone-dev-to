import axiosClient from './axiosClient';
// import axios from 'axios'
const baseUrl = '/api/v1/tags';
const tagApi = {
	getAllTag(text) {
		const url = !text ? `${baseUrl}` : `${baseUrl}?q=${text}`;
		return axiosClient.get(url);
		
	},
};
export default tagApi;
