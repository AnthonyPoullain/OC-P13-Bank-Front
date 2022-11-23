import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../services/user.service';

const user = JSON.parse(localStorage.getItem('user'));

export const fetchUserProfile = createAsyncThunk(
	'user/fetchProfile',
	async () => {
		const response = await UserService.getUserProfile();
		return response;
	}
);

const initialState = user
	? { isLoggedIn: true, token: user?.token }
	: { isLoggedIn: false, token: null, data: null };

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state) => {
			state.isLoggedIn = true;
			state.token = user?.token;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.token = null;
			state.data = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserProfile.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchUserProfile.rejected, (state, action) => {
			state.data = action.payload;
			state.loading = false;
		});
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
