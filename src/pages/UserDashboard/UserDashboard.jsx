import React, { useEffect } from 'react';
import { tabTitle } from '../../utils/helperFunctions';

function UserDashboard() {
	useEffect(() => {
		tabTitle('Dashboard');
	}, []);
	return <div>UserDashboard</div>;
}

export default UserDashboard;
