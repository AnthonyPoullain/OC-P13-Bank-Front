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

	static async getUserAccounts() {
		const response = [
			{
				key: 1,
				title: 'Argent Bank Checking (x8349)',
				amount: '$2,082.79',
				description: 'Available Balance',
			},
			{
				key: 2,
				title: 'Argent Bank Savings (x6712)',
				amount: '$10,928.42',
				description: 'Available Balance',
			},
			{
				key: 3,
				title: 'Argent Bank Credit Card (x8349)',
				amount: '$184.30',
				description: 'Current Balance',
			},
		];
		return response;
	}

	static async updateUserProfile(firstName, lastName) {
		await axios.put(
			`${API_URL}/user/profile`,
			{
				firstName,
				lastName,
			},
			{ headers: authHeader() }
		);
	}
}

export default UserService;
