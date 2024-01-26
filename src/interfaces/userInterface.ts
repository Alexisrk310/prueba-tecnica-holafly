export interface userAuth {
	name?: string | undefined;
	email: string | undefined;
	password: string | undefined;
}
export interface UserDataStore {
	stateData: UserData[];
	addData: (value: UserData) => void;
}
export interface UserData {
	status: 'Expired' | 'Pending' | 'Active';
	dateStart: string;
	dateEnd: string;
	consumption: null | any;
	flag: string;
	country: string;
	plan: string;
	city: string;
	storage: string;
}
