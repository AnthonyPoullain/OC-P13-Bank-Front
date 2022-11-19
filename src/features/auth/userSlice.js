import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
	? { isLoggedIn: true, token: user.token }
	: { isLoggedIn: false, token: null };

export const userSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.isLoggedIn = true;
			state.token = user.token;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.token = null;
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
