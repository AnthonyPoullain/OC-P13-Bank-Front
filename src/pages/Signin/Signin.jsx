import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './Signin.module.css';
import AuthService from '../../services/auth.service';
import { login } from '../../features/auth/loggerSlice';
import { tabTitle } from '../../utils/helperFunctions';

function Signin() {
	const [email, setEmail] = useState();
	const [pwd, setPwd] = useState();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		tabTitle('Sign In');
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await AuthService.login(email, pwd);
			dispatch(login());
			navigate('/dashboard');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="bg-dark" style={{ height: 'calc(100vh - 144.38px)' }}>
			<section className={styles.sign_in_content}>
				<i className="fa fa-user-circle" />
				<h1>Sign In</h1>
				<form onSubmit={handleLogin}>
					<div className={styles.input_wrapper}>
						<label htmlFor="username">Username</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							id="username"
							required
						/>
					</div>
					<div className={styles.input_wrapper}>
						<label htmlFor="password">Password</label>
						<input
							onChange={(e) => setPwd(e.target.value)}
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
						Sign In
					</button>
				</form>
			</section>
		</div>
	);
}

export default Signin;