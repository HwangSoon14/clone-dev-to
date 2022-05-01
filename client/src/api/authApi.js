import axiosClient from './axiosClient';
const baseUrl = '/api/v1/auth';
const authApi = {
	register(data) {
		const url = `${baseUrl}/register`;
		return axiosClient.post(url, { ...data });
	},

	login(data) {
		const url = `${baseUrl}/login`;
		return axiosClient.post(url, { ...data });
	},
	refresh_token() {
		const url = `${baseUrl}/refresh`;
		return axiosClient.post(url ,{credentials: 'include'});
	},
	log_out() {
		const url  = `${baseUrl}/log_out`;
		return axiosClient.post(url , { credentials: 'include'});
	},
	sendMail(data) {
		const url = `${baseUrl}/password/require`;
		return axiosClient.post(url, { ...data });
	},
	confirmOTP(OTP) {
		const url = `${baseUrl}/password/confirm`;
		return axiosClient.post(url, {otp: OTP});
	},
	newPassword(newPassword) {
		const url = `${baseUrl}/password/new`;
		return axiosClient.post(url , {newPass:newPassword }, { credentials: 'include'});
	}
};
export default authApi;
