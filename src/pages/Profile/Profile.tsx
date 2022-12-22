import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
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
	const dispatch = useAppDispatch();

	/* Local state */
	const [editMode, setEditMode] = useState<boolean>(false);
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');

	/* Global state */
	const userInfo: User = useAppSelector((state) => state.user.userInfo);
	const accounts: Accounts = useAppSelector((state) => state.user.accounts);

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

	const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await dispatch(updateUserProfile({ firstName, lastName }));
		await dispatch(fetchUserProfile());
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
									onChange={(e) => setFirstName(e.target.value)}
									type="text"
									id="username"
									placeholder={userInfo?.data?.firstName}
									required
									style={{
										marginRight: '10px',
										height: '25px',
										border: 'none',
										borderRadius: '2px',
									}}
								/>
								<input
									onChange={(e) => setLastName(e.target.value)}
									type="text"
									id="username"
									placeholder={userInfo?.data?.lastName}
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
