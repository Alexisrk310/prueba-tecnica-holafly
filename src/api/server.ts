import { UserDataCard } from '@/interfaces/cardProps';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

interface User {
	id: number;
	name: string;
	email: string;
	password: string;
}

const PORT = process.env.PORT || 3001;

const server = express();
server.use(bodyParser.json());
server.use(
	cors({
		origin: '*',
	})
);

const users: User[] = [
	{
		id: 1,
		name: 'holafly',
		email: 'holafly@gmail.com',
		password: 'holafly123',
	},
];

server.post('/api/login', (req: any, res: any) => {
	const { email, password } = req.body;

	const user = users.find((u) => u.email === email && u.password === password);

	if (user) {
		res.json({ message: 'Login successful', name: user.name, userId: user.id });
	} else {
		res.status(401).json({ error: 'Incorrect credentials' });
	}
});

const userData: UserDataCard[] = [
	{
		status: 'Expired',
		dateStart: '01/01/2023',
		dateEnd: '04/01/2023',
		consumption: null,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png',
		country: 'Colombia',
		plan: '4 days, 3GB',
	},
	{
		status: 'Expired',
		dateStart: '02/01/2023',
		dateEnd: '02/01/2023',
		consumption: null,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png',
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
		flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/1280px-Flag_of_Peru_%28state%29.svg.png',
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
		flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png',
		country: 'Spain',
		plan: '10 days, 12GB',
	},
];

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
