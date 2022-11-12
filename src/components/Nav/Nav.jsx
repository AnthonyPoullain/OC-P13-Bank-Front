import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.png';
import './Nav.css';

function Nav() {
	return (
		<nav className="main-nav">
			<Link to="/" className="main-nav-logo">
				<img
					className="main-nav-logo-image"
					src={Logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				<Link to="signin" className="main-nav-item">
					<i className="fa fa-user-circle" />
					Sign In
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
