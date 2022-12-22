function authHeader() {
	interface Token {
		token: string;
	}

	const hasUserToken = localStorage.getItem('user');

	if (hasUserToken) {
		const user: Token = JSON.parse(hasUserToken);

		if (user.token) {
			return {
				Authorization: `Bearer ${user.token}`,
			};
		}
	}

	return {};
}

export default authHeader;
