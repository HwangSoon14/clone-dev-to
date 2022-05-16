import axiosClient from "./axiosClient";

const baseUrl = '/api/v1/posts';

const postApi = {
    getAllPost(urlString)
    {   
        const arr = urlString.split("/");
        if(urlString === "/") arr[1] = "relevant";
		const url = !arr[2] ? `${baseUrl}/${arr[1]}` : `${baseUrl}/${arr[1]}/${arr[2]}`;
		return axiosClient.get(url);
    },

    getPostBySlug(slug)
    {
        const url = `${baseUrl}/${slug}`;
        return axiosClient.get(url);
    },
    addNewPost() {

    },
    deletePost(id) {

    },

};
export default postApi;