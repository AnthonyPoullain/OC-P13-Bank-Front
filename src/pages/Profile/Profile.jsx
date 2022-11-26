import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountCard from '../../components/AccountCard/AccountCard';
import { tabTitle } from '../../utils/helperFunctions';
import styles from './Profile.module.css';
import { fetchUserProfile } from '../../features/auth/userSlice';
import UserService from '../../services/user.service';

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
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.user.data);

	const [accounts, setAccounts] = useState([]);
	const [editMode, setEditMode] = useState(false);

	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');

	useEffect(() => {
		tabTitle('Profile');
	}, []);

	useEffect(() => {
		if (!userData) {
			dispatch(fetchUserProfile());
		}

		setAccounts(() => ACCOUNTS);
	}, []);

	const handleToggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleUpdateProfile = async (e) => {
		e.preventDefault();
		try {
			await UserService.updateUserProfile(
				newFirstName.charAt(0).toUpperCase() + newFirstName.slice(1),
				newLastName.charAt(0).toUpperCase() + newLastName.slice(1)
			);
			dispatch(fetchUserProfile());
			handleToggleEditMode();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		userData && (
			<div className="bg-dark" style={{ height: '100%', overflow: 'hidden' }}>
				<div className={styles.header}>
					{editMode ? (
						<>
							<h1>Welcome back</h1>
							<form onSubmit={handleUpdateProfile}>
								<div style={{ marginBottom: '10px' }}>
									<input
										onChange={(e) => setNewFirstName(e.target.value)}
										type="text"
										id="username"
										placeholder={userData.firstName}
										style={{
											marginRight: '10px',
											height: '25px',
											border: 'none',
											borderRadius: '2px',
										}}
									/>
									<input
										onChange={(e) => setNewLastName(e.target.value)}
										type="text"
										id="username"
										placeholder={userData.lastName}
										style={{
											marginLeft: '10px',
											height: '25px',
											border: 'none',
											borderRadius: '2px',
										}}
									/>
								</div>
								<button
									className={styles.edit_button}
									style={{ marginRight: '10px', width: '100px' }}
									type="submit"
								>
									Save
								</button>
								<button
									className={styles.edit_button}
									style={{ marginLeft: '10px', width: '100px' }}
									type="button"
									onClick={handleToggleEditMode}
								>
									Cancel
								</button>
							</form>
						</>
					) : (
						<>
							<h1>
								Welcome back
								<br />
								{`${userData.firstName} ${userData.lastName}`}
							</h1>
							<button
								className={styles.edit_button}
								type="button"
								onClick={handleToggleEditMode}
							>
								Edit Name
							</button>
						</>
					)}
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
