import React, { useEffect } from 'react';
import { tabTitle } from '../../utils/helperFunctions';

function Signin() {
	useEffect(() => {
		tabTitle('Sign In');
	}, []);
	return <div>Signin</div>;
}

export default Signin;
