import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/api/v1';

/**
 * A class that provides methods for interacting with the user's profile and accounts data.
 */
class UserService {
	/**
	 * Retrieves the user's profile data.
	 *
	 * @returns {Promise<Object>} A promise that resolves to the user's profile data.
	 */
	static async getUserProfile() {
		const response = await axios.post(
			`${API_URL}/user/profile`,
			{},
			{ headers: authHeader() }
		);

		return response.data.body;
	}

	/**
	 * Retrieves the user's accounts data.
	 *
	 * @returns {Promise<Object[]>} A promise that resolves to the user's accounts data.
	 */
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
		/* eslint-disable-next-line no-promise-executor-return */
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return response;
	}

	/**
	 * Updates the user's profile data.
	 *
	 * @param {string} firstName The user's first name.
	 * @param {string} lastName The user's last name.
	 * @returns {Promise<void>} A promise that resolves when the user's profile data has been updated.
	 */
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
