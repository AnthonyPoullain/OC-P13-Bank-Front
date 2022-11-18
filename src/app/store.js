import { configureStore } from '@reduxjs/toolkit';
import loggerReducer from '../features/auth/loggerSlice';

export default configureStore({
	reducer: {
		logger: loggerReducer,
	},
});
