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
    likePost(id){
        const url = `${baseUrl}/${id}/like`;
        return axiosClient.post(url);
    },
    unLikePost(id){
        const url = `${baseUrl}/${id}/unlike`;
        return axiosClient.post(url);
    },
    getCommentByPostId(id, type) {
        const url = `${baseUrl}/${id}/comments?sort=desc`;
        return axiosClient.get(url);
    },
   addComment(id,body) {
        const url = `${baseUrl}/${id}/comments`;
        return axiosClient.post(url, body);
    }

};
export default postApi;