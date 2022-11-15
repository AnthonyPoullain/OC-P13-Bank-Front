import React, { useEffect } from 'react';
import { tabTitle } from '../../utils/helperFunctions';
import styles from './Signin.module.css';

function Signin() {
	useEffect(() => {
		tabTitle('Sign In');
	}, []);

	return (
		<div className="bg-dark" style={{ height: 'calc(100vh - 144.38px)' }}>
			<section className={styles.sign_in_content}>
				<i className="fa fa-user-circle" />
				<h1>Sign In</h1>
				<form>
					<div className={styles.input_wrapper}>
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className={styles.input_wrapper}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
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
