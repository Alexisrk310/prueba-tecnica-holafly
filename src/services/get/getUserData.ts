'use client';
import { UserDataStore } from '@/interfaces/userInterface';

interface Iset {
	set: (
		partial:
			| UserDataStore
			| Partial<UserDataStore>
			| ((state: UserDataStore) => UserDataStore | Partial<UserDataStore>),
		replace?: boolean | undefined
	) => void;
}
export const getUserData = async (id: string, set: Iset['set']) => {
	let userDataString = localStorage.getItem('@user');
	let userData = JSON.parse(userDataString as any);

	const userDataEndpoint = `http://localhost:3001/api/users/${id}/data`;
	try {
		const response = await fetch(userDataEndpoint, {
			headers: {
				'Content-Type': 'application/json',
				'x-token': userData?.token,
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		set({ cardConsumed: data });
	} catch (error: any) {
		console.error('Error during data:', error.message);
	}
};
