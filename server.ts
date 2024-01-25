// server.ts
const express = require('express');
const bodyParser = require('body-parser');

interface User {
	id: number;
	name: string;
	email: string;
	password: string;
}

interface UserData {
	status: string;
	dateStart: string;
	dateEnd: string | null;
	consumption: { totalConsumption: number } | null;
	flag: string;
	country: string;
	plan: string;
}

const PORT = process.env.PORT || 3001;

const server = express();
server.use(bodyParser.json());

// Static list of users
const users: User[] = [
	{
		id: 1,
		name: 'holafly',
		email: 'holafly@gmail.com',
		password: 'holadly123',
	},
];

// Login route
server.post('/api/login', (req: any, res: any) => {
	const { email, password } = req.body;

	// Verify credentials (in a real environment, you should compare with encrypted data)
	const user = users.find((u) => u.email === email && u.password === password);

	if (user) {
		res.json({ message: 'Login successful', name: user.name, userId: user.id });
	} else {
		res.status(401).json({ error: 'Incorrect credentials' });
	}
});

// Specific data for each user
const userData: Record<string, UserData[]> = {
	'1': [
		{
			status: 'Expired',
			dateStart: '01/01/2023',
			dateEnd: '04/01/2023',
			consumption: null,
			flag: 'URL_IMAGE_COUNTRY_1',
			country: 'Colombia',
			plan: '4 days, 3GB',
		},
		{
			status: 'Expired',
			dateStart: '02/01/2023',
			dateEnd: '02/01/2023',
			consumption: null,
			flag: 'URL_IMAGE_COUNTRY_2',
			country: 'Colombia',
			plan: '30 days, 25GB',
		},
		{
			status: 'Pending',
			dateStart: '01/01/2024',
			dateEnd: null,
			consumption: {
				totalConsumption: 1468006.4,
			},
			flag: 'URL_IMAGE_COUNTRY_3',
			country: 'Peru',
			plan: '1 day, 1.4GB',
		},
		{
			status: 'Active',
			dateStart: '06/10/2023',
			dateEnd: '16/10/2023',
			consumption: {
				totalConsumption: 12582912,
			},
			flag: 'URL_IMAGE_COUNTRY_4',
			country: 'Spain',
			plan: '10 days, 12GB',
		},
	],
	// ... other users
};

// Route to get specific data for a user by ID
server.get('/api/users/:id/data', (req: any, res: any) => {
	const userId = req.params.id;
	const data = userData[userId];

	if (data) {
		res.json(data);
	} else {
		res.status(404).json({ error: 'User data not found' });
	}
});

server.listen(PORT, (err: Error) => {
	if (err) throw err;
	console.log(`> Ready on http://localhost:${PORT}`);
});
