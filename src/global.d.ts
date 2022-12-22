declare module '*.png';
declare module '*.css';

interface userState {
	isLoggedIn: boolean;
	userInfo: { loading: boolean; data: userData | null };
	accounts: { loading: boolean; data: account[] | null };
	loading: boolean;
	error: string | null;
}

interface userData {
	firstName: string;
	lastName: string;
}

interface user {
	loading: boolean;
	data: userData | null;
}

interface credentials {
	email: string;
	password: string;
}

interface accounts {
	loading: boolean;
	data: account[] | null;
}
interface account {
	key: number;
	title: string;
	amount: string;
	description: string;
}
