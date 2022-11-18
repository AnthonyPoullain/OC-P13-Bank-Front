import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null };

export const loggerSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.isLoggedIn = true;
			state.user = JSON.parse(localStorage.getItem('user'));
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});

export const { login, logout } = loggerSlice.actions;

export default loggerSlice.reducer;
