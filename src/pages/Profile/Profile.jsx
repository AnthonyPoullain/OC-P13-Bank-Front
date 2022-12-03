import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeWord, tabTitle } from '../../utils/helperFunctions';
import styles from './Profile.module.css';
import { fetchUserProfile } from '../../features/auth/userSlice';
import UserService from '../../services/user.service';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import AccountCard from '../../components/AccountCard/AccountCard';

function Profile() {
	const dispatch = useDispatch();

	/* Local state */
	const [accounts, setAccounts] = useState();
	const [editMode, setEditMode] = useState(false);
	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');

	/* Global state */
	const userData = useSelector((state) => state.user.data);
	const isLoading = useSelector((state) => state.user.loading);

	useEffect(() => {
		tabTitle('Profile');
	}, []);

	useEffect(() => {
		if (!userData) dispatch(fetchUserProfile());
		if (!accounts) {
			(async () => {
				const accountsData = await UserService.getUserAccounts();
				setAccounts(accountsData);
			})();
		}
	}, []);

	const handleToggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleUpdateProfile = async (e) => {
		e.preventDefault();
		try {
			// 1) Update user data
			await UserService.updateUserProfile(
				capitalizeWord(newFirstName),
				capitalizeWord(newLastName)
			);
			// 2) Fetch new user data
			dispatch(fetchUserProfile());
			// 3) Turn edit mode off
			handleToggleEditMode();
		} catch (error) {
			console.log(error);
		}
	};

	return (
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
									placeholder={userData?.firstName}
									required
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
									placeholder={userData?.lastName}
									required
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
							{isLoading ? (
								<LoadingSpinner />
							) : (
								`${userData?.firstName} ${userData?.lastName}`
							)}
						</h1>
						{!isLoading && (
							<button
								className={styles.edit_button}
								type="button"
								onClick={handleToggleEditMode}
							>
								Edit Name
							</button>
						)}
					</>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			{!accounts ? (
				<LoadingSpinner />
			) : (
				accounts.map((acc) => <AccountCard accountData={acc} key={acc.key} />)
			)}
		</div>
	);
}

export default Profile;
