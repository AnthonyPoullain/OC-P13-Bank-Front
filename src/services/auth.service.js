import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

/**
 * @class AuthService
 * @description This class is responsible for handling all authentication related tasks
 */
class AuthService {
	/**
	 * @static
	 * @description This method is responsible for logging in a user
	 * @param {string} email The email of the user
	 * @param {string} password The password of the user
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	static async login(email, password) {
		const response = await axios.post(`${API_URL}/user/login`, {
			email,
			password,
		});
		if (response.data.body.token) {
			localStorage.setItem('user', JSON.stringify(response.data.body));
		}

		return response;
	}

	/**
	 * @static
	 * @description This method is responsible for logging out a user
	 */
	static logout() {
		localStorage.removeItem('user');
	}
}

export default AuthService;
