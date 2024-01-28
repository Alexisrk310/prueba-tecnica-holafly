export interface userAuth {
	name?: string | undefined;
	email: string | undefined;
	password: string | undefined;
}
export interface UserDataStore {
	cardConsumed: CardConsumed[];
	fetchData: (value: string) => void;
}
export interface CardConsumed {
	status: 'Expired' | 'Pending' | 'Active';
	dateStart: string;
	dateEnd: string;
	consumption: null | any;
	flag: string;
	country: string;
	plan: string;
	city: string;
	storage: string;
	id: string
}
