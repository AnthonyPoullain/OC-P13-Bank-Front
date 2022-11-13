import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.png';
import styles from './Nav.module.css';

function Nav() {
	return (
		<nav className={styles.main_nav}>
			<Link to="/" className={styles.main_nav_logo}>
				<img
					className={styles.main_nav_logo_image}
					src={Logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				<Link to="signin" className={styles.main_nav_item}>
					<i className="fa fa-user-circle" style={{ marginRight: '5px' }} />
					Sign In
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
