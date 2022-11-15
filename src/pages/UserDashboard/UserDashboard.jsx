import React, { useEffect, useState } from 'react';
import AccountCard from '../../components/AccountCard/AccountCard';
import { tabTitle } from '../../utils/helperFunctions';
import styles from './UserDashboard.module.css';

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

function UserDashboard() {
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		tabTitle('Dashboard');
	}, []);

	useEffect(() => {
		setAccounts(() => ACCOUNTS);
	}, []);

	return (
		<div className="bg-dark" style={{ height: '100%', overflow: 'hidden' }}>
			<div className={styles.header}>
				<h1>
					Welcome back
					<br />
					Tony Jarvis!
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
	);
}

export default UserDashboard;
