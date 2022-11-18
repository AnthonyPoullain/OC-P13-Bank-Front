import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

class AuthService {
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

	static logout() {
		localStorage.removeItem('user');
	}
}

export default AuthService;
