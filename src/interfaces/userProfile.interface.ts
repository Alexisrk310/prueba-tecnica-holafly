export interface IUserStore {
	profile: {
		name: string;
		id: string;
	};
	auth: { token: string };
	setProfile: (value: { name: string; id: string }) => void;
	setAuth: (value: { token: string }) => void;
}
