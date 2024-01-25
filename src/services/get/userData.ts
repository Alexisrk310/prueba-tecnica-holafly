export const userData = async (id: string) => {
	const userDataEndpoint = `http://localhost:3001/api/users/${id}/data`;
	try {
		const response = await fetch(userDataEndpoint, {
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return await data;
	} catch (error: any) {
		console.error('Error during data:', error.message);
	}
};
