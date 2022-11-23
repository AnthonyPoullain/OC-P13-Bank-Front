import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountCard from '../../components/AccountCard/AccountCard';
import { tabTitle } from '../../utils/helperFunctions';
import styles from './Profile.module.css';
import { fetchUserProfile } from '../../features/auth/userSlice';

const ACCOUNTS = [
	{
		key: 1,
		title: 'Argent Bank Checking (x8349)',
		amount: '$2,082.79',
		description: 'Available Balance',
	},
	{
		key: 2,
		title: 'Argent Bank Savings (x6712)',
		amount: '$10,928.42',
		description: 'Available Balance',
	},
	{
		key: 3,
		title: 'Argent Bank Credit Card (x8349)',
		amount: '$184.30',
		description: 'Current Balance',
	},
];

function Profile() {
	const [accounts, setAccounts] = useState([]);
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.user.data);

	useEffect(() => {
		tabTitle('Profile');
	}, []);

	useEffect(() => {
		if (!userData) {
			dispatch(fetchUserProfile());
		}

		setAccounts(() => ACCOUNTS);
	}, []);

	return (
		userData && (
			<div className="bg-dark" style={{ height: '100%', overflow: 'hidden' }}>
				<div className={styles.header}>
					<h1>
						Welcome back
						<br />
						{`${userData.firstName} ${userData.lastName}`}
					</h1>
					<button className={styles.edit_button} type="button">
						Edit Name
					</button>
				</div>
				<h2 className="sr-only">Accounts</h2>
				{accounts.map((acc) => (
					<AccountCard accountData={acc} key={acc.key} />
				))}
			</div>
		)
	);
}

export default Profile;
