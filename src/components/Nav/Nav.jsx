import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Nav.module.css';
import { logout } from '../../features/auth/userSlice';
import Logo from '../../assets/argentBankLogo.png';

function Nav() {
	const dispatch = useDispatch();

	/* Global state */
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const userData = useSelector((state) => state.user.data);

	const handleLogout = () => {
		dispatch(logout());
	};

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
			{isLoggedIn ? (
				<div>
					{userData?.firstName && (
						<Link className="main-nav-item" to="profile">
							<i className="fa fa-user-circle" />
							{userData.firstName}
						</Link>
					)}
					<button
						type="button"
						className="main-nav-item"
						onClick={() => handleLogout()}
					>
						<i className="fa fa-sign-out" />
						Sign Out
					</button>
				</div>
			) : (
				<div>
					<Link to="login" className={styles.main_nav_item}>
						<i className="fa fa-user-circle" style={{ marginRight: '5px' }} />
						Sign In
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Nav;
