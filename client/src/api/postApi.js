import axiosClient from "./axiosClient";

const baseUrl = '/api/v1/posts';

const postApi = {
    getAllPost(data)
    {
        const url = '/api/post/register';
        return axiosClient.post(url,data);
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