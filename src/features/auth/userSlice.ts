import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import UserService from '../../services/user.service';
import { capitalizeWord } from '../../utils/helperFunctions';

let user = localStorage.getItem('user');
if (user) user = JSON.parse(user);

export const login = createAsyncThunk<
	APIResponse,
	Credentials,
	{ rejectValue: APIResponse }
>(
	'user/login',
	async ({ email, password }: Credentials, { rejectWithValue }) => {
		try {
			const response = await AuthService.login(email, password);
			return response.data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
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

export const fetchUserAccounts = createAsyncThunk(
	'user/fetchAccounts',
	async () => {
		const response = await UserService.getUserAccounts();
		return response;
	}
);

export const updateUserProfile = createAsyncThunk(
	'user/updateProfile',
	async ({ firstName, lastName }: UserData) => {
		await UserService.updateUserProfile(
			capitalizeWord(firstName),
			capitalizeWord(lastName)
		);
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		isLoggedIn: !!user,
		userInfo: { loading: false, data: null },
		accounts: { loading: false, data: null },
		loading: false,
		error: null,
	} as UserState,

	reducers: {
		logout: (state) => {
			state.isLoggedIn = false;
			state.userInfo.data = null;
			state.accounts.data = null;
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
			state.error = action.payload ? action.payload.message : null;
		});
		builder.addCase(login.fulfilled, (state) => {
			state.loading = false;
			state.isLoggedIn = true;
		});

		// fetchUserProfile
		builder.addCase(fetchUserProfile.pending, (state) => {
			state.userInfo.loading = true;
		});
		builder.addCase(fetchUserProfile.rejected, (state) => {
			state.isLoggedIn = false;
			state.userInfo.loading = false;
			state.userInfo.data = null;
			state.accounts.data = null;
			AuthService.logout();
		});
		builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
			state.userInfo.data = action.payload;
			state.userInfo.loading = false;
		});

		// fetchUserAccounts
		builder.addCase(fetchUserAccounts.pending, (state) => {
			state.accounts.loading = true;
		});
		builder.addCase(fetchUserAccounts.rejected, (state) => {
			state.accounts.loading = false;
		});
		builder.addCase(fetchUserAccounts.fulfilled, (state, action) => {
			state.accounts.loading = false;
			state.accounts.data = action.payload;
		});
	},
});

export const { logout, clearErrorMessage } = userSlice.actions;

export default userSlice.reducer;
