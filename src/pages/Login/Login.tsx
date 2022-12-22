import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './Login.module.css';
import { login } from '../../features/auth/userSlice';
import { tabTitle } from '../../utils/helperFunctions';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function Signin() {
	const dispatch = useAppDispatch();

	/* Local state */
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	/* Global state */
	const isLoading: boolean = useAppSelector((state) => state.user.loading);
	const error: string | null = useAppSelector((state) => state.user.error);

	useEffect(() => {
		tabTitle('Login');
	}, []);

	const handleLogin = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(login({ email, password }));
	};

	return (
		<div className="bg-dark" style={{ height: 'calc(100vh - 144.38px)' }}>
			<section className={styles.sign_in_content}>
				<i className="fa fa-user-circle" />
				<h1>Sign In</h1>
				{error && <ErrorMessage message={error} />}
				<form onSubmit={handleLogin}>
					<div className={styles.input_wrapper}>
						<label htmlFor="username">Username</label>
						<input
							autoFocus
							onChange={(e) => setEmail(e.currentTarget.value)}
							type="text"
							id="username"
							required
						/>
					</div>
					<div className={styles.input_wrapper}>
						<label htmlFor="password">Password</label>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
							required
						/>
					</div>
					<div className={styles.input_remember}>
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button className={styles.sign_in_button} type="submit">
						{isLoading ? <LoadingSpinner /> : 'Sign in'}
					</button>
				</form>
			</section>
		</div>
	);
}

export default Signin;
