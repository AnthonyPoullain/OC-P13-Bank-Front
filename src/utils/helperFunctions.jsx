import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

/**
 * Change the current tab title.
 * The prefix 'Argent Bank - ' is automatically added.
 *
 * @param {string} newTitle - New tab title
 */
export function tabTitle(newTitle) {
	if (!newTitle) return;
	document.title = `Argent Bank - ${newTitle}`;
}

/**
 * Scroll to top of the page on route change
 * (From react router docs)
 */
export function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

/**
 * Protect routes from unauthorized users
 *
 * @param {{isAllowed: boolean, redirectPath: string}}
 */
export function ProtectedRoute({ isAllowed, redirectPath }) {
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}
	return <Outlet />;
}

ProtectedRoute.propTypes = {
	isAllowed: PropTypes.bool.isRequired,
	redirectPath: PropTypes.string.isRequired,
};

/**
 * Capitalize first letter of input word
 *
 * @param {string} word - Word to capitalize
 */
export function capitalizeWord(word) {
	return (word.charAt(0).toUpperCase() + word.slice(1)).trim();
}
