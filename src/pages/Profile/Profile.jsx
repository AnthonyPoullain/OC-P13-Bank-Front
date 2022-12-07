import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tabTitle } from '../../utils/helperFunctions';
import styles from './Profile.module.css';
import {
	fetchUserAccounts,
	fetchUserProfile,
	updateUserProfile,
} from '../../features/auth/userSlice';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import AccountCard from '../../components/AccountCard/AccountCard';

function Profile() {
	const dispatch = useDispatch();

	/* Local state */
	const [editMode, setEditMode] = useState(false);
	const [newFirstName, setNewFirstName] = useState('');
	const [newLastName, setNewLastName] = useState('');

	/* Global state */
	const userInfo = useSelector((state) => state.user.userInfo);
	const accounts = useSelector((state) => state.user.accounts);

	useEffect(() => {
		tabTitle('Profile');
	}, []);

	useEffect(() => {
		if (!userInfo.data) dispatch(fetchUserProfile());
		if (!accounts.data) dispatch(fetchUserAccounts());
	}, []);

	const handleToggleEditMode = () => {
		setEditMode(!editMode);
	};

	const handleUpdateProfile = async (e) => {
		e.preventDefault();
		dispatch(updateUserProfile({ newFirstName, newLastName }));
		dispatch(fetchUserProfile());
		handleToggleEditMode();
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
									autoFocus
									onChange={(e) => setNewFirstName(e.target.value)}
									type="text"
									id="username"
									placeholder={userInfo?.firstName}
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
									placeholder={userInfo?.lastName}
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
							{userInfo.loading ? (
								<LoadingSpinner />
							) : (
								`${userInfo?.data?.firstName} ${userInfo?.data?.lastName}`
							)}
						</h1>
						{!userInfo.loading && (
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
			<div className="accounts">
				{accounts.loading &&
					[null, null, null].map((acc, i) => (
						/* eslint-disable-next-line react/no-array-index-key */
						<AccountCard accountData={acc} key={i} />
					))}
				{accounts.data &&
					accounts.data.map((acc) => (
						<AccountCard accountData={acc} key={acc.key} />
					))}
			</div>
		</div>
	);
}

export default Profile;
