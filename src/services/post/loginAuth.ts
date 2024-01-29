import { userAuth } from '@/interfaces/userInterface';

export const loginAuth = async (credentials: userAuth) => {
	const loginEndpoint = 'https://holaflybackend.onrender.com/api/login';
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
		return data;
	} catch (error: any) {
		console.log(error);

		console.error('Error during login:', error.message);
	}
	console.log(credentials);
};
