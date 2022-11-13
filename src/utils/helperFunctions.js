import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
