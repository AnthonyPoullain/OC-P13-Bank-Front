declare module '*.png';
declare module '*.css';

interface UserState {
	isLoggedIn: boolean;
	userInfo: User;
	accounts: Accounts;
	loading: boolean;
	error: string | null;
}

interface UserData {
	firstName: string;
	lastName: string;
}

interface User {
	loading: boolean;
	data: UserData | null;
}

interface Credentials {
	email: string;
	password: string;
}

interface Accounts {
	loading: boolean;
	data: Account[] | null;
}
interface Account {
	key: number;
	title: string;
	amount: string;
	description: string;
}

interface Feature {
	key: number;
	icon: string;
	alt: string;
	title: string;
	text: string;
}

interface APIResponse {
	status: number;
	message: string;
}
