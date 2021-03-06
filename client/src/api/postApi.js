import axiosClient from './axiosClient';

const baseUrl = '/api/v1/posts';

const postApi = {
	getAllPost(urlString, limit) {
		const arr = urlString.split('/');
		if (urlString === '/') arr[1] = 'relevant';
		const url = !arr[2] ? `${baseUrl}/${arr[1]}` : `${baseUrl}/${arr[1]}/${arr[2]}`;
		return axiosClient.get(url + `?limit=${limit}&page=1`);
	},

	getPostBySlug(slug) {
		const url = `${baseUrl}/${slug}`;
		return axiosClient.get(url);
	},
	addNewPost() {},
	deletePost(id) {},
	likePost(id) {
		const url = `${baseUrl}/${id}/like`;
		return axiosClient.post(url);
	},
	unLikePost(id) {
		const url = `${baseUrl}/${id}/unlike`;
		return axiosClient.post(url);
	},
	getCommentByPostId(id, type) {
		const url = `${baseUrl}/${id}/comments?sort=${type}`;
		return axiosClient.get(url);
	},
	addComment(id, body) {
		const url = `${baseUrl}/${id}/comments`;
		return axiosClient.post(url, body);
	},
	deleteComment(idPost, idComment) {
		const url = `${baseUrl}/${idPost}/comments/${idComment}`;
		return axiosClient.delete(url);
	},
	search(type, q, sort) {
		let url = '';
		if (!sort) url = `${baseUrl}/search/${type}?q=${q}`;
		else url = `${baseUrl}/search/${type}?q=${q}&sort=${sort}`;
		return axiosClient.get(url);
	},
	getPopulate() {
		const url = `${baseUrl}/populate`;
		return axiosClient.get(url);
	},
};
export default postApi;
