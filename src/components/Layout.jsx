import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';

function Layout() {
	return (
		<div>
			<Nav />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
