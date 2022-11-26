import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/api/v1';

class UserService {
	static async getUserProfile() {
		const response = await axios.post(
			`${API_URL}/user/profile`,
			{},
			{ headers: authHeader() }
		);

		return response.data.body;
	}

	static async updateUserProfile(firstName, lastName) {
		const response = await axios.put(
			`${API_URL}/user/profile`,
			{
				firstName,
				lastName,
			},
			{ headers: authHeader() }
		);
		console.log(response.data);
	}
}

export default UserService;
