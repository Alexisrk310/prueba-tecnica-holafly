import { userAuth } from '@/interfaces/userInterface';

export const loginAuth = async (credentials: userAuth) => {
	const loginEndpoint = 'http://localhost:3001/api/login';
	try {
		const response = await fetch(loginEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return await data;
	} catch (error: any) {
		console.error('Error during login:', error.message);
	}
	console.log(credentials);
};
