/**
 * Function for getting authorization header
 *
 * @returns {Object} Authorization header
 */
function authHeader() {
	const user = JSON.parse(localStorage.getItem('user'));

	if (user && user.token) {
		return {
			Authorization: `Bearer ${user.token}`,
		};
	}

	return {};
}

export default authHeader;
