import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Nav.module.css';
import { logout } from '../../features/auth/userSlice';
import Logo from '../../assets/argentBankLogo.png';
import AuthService from '../../services/auth.service';

function Nav() {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		AuthService.logout();
		dispatch(logout());
		navigate('/');
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
					<Link className="main-nav-item" to="profile">
						<i className="fa fa-user-circle" />
						Tony
					</Link>
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
					<Link to="signin" className={styles.main_nav_item}>
						<i className="fa fa-user-circle" style={{ marginRight: '5px' }} />
						Sign In
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Nav;
