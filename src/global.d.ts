declare module '*.png';
declare module '*.css';

interface UserState {
	isLoggedIn: boolean;
	userInfo: { loading: boolean; data: UserData | null };
	accounts: { loading: boolean; data: Account[] | null };
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
