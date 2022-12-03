import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import UserService from '../../services/user.service';

const user = JSON.parse(localStorage.getItem('user'));

export const login = createAsyncThunk(
	'user/login',
	async (credentials, { rejectWithValue }) => {
		try {
			const { email, password } = credentials;
			const response = await AuthService.login(email, password);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUserProfile = createAsyncThunk(
	'user/fetchProfile',
	async () => {
		const response = await UserService.getUserProfile();
		return response;
	}
);

const initialState = user
	? { isLoggedIn: true, loading: false, error: null }
	: { isLoggedIn: false, data: null, loading: false, error: null };

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.isLoggedIn = false;
			state.data = null;
			AuthService.logout();
		},
		clearErrorMessage: (state) => {
			state.error = null;
		},
	},

	extraReducers: (builder) => {
		// login
		builder.addCase(login.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		});
		builder.addCase(login.fulfilled, (state) => {
			state.loading = false;
			state.isLoggedIn = true;
		});

		// fetchUserProfile
		builder.addCase(fetchUserProfile.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchUserProfile.rejected, (state) => {
			state.loading = false;
			state.isLoggedIn = false;
			state.data = null;
			AuthService.logout();
		});
		builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = false;
		});
	},
});

export const { logout, clearErrorMessage } = userSlice.actions;

export default userSlice.reducer;
