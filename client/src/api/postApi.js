import axiosClient from "./axiosClient";

const postApi = {
    getAllPost(data)
    {
        const url = '/api/post/register';
        return axiosClient.post(url,data);
    },

    getPostById(data)
    {
        const url = '/api/post/login';
        return axiosClient.post(url,data);
    },
    addNewPost() {

    },
    deletePost(id) {

    },

};
export default postApi;