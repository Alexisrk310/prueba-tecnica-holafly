// server.ts
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { User, UserData } = require('./interfaces/IUser.interface');
const PORT = process.env.PORT || 3001;
const SECRET_KEY = 'HOLAFLY';

const server = express();
server.use(bodyParser.json());
server.use(
	cors({
		origin: '*',
	})
);

const users: (typeof User)[] = [
	{
		id: 1,
		name: 'holafly',
		email: 'holafly@gmail.com',
		password: 'holafly123',
	},
	{
		id: 2,
		name: 'holafly2',
		email: 'holafly2@gmail.com',
		password: 'holafly12',
	},
];

function generateToken(user: typeof User): string {
	return jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
}

function verifyToken(req: any, res: any, next: any) {
	const token = req.headers.authorization || req.headers['x-token'];

	if (!token) {
		return res.status(403).json({ error: 'Token is missing' });
	}

	jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
		if (err) {
			return res.status(401).json({ error: 'Invalid token' });
		}

		const userId = decoded.userId;

		// Verificar que el ID del usuario en el token sea el mismo que el proporcionado en la URL
		if (req.params.id && parseInt(req.params.id, 10) !== userId) {
			return res
				.status(401)
				.json({ error: 'Token does not match the provided user ID' });
		}

		req.userId = userId;
		next();
	});
}

server.post('/api/login', (req: any, res: any) => {
	const { email, password } = req.body;

	const user = users.find((u) => u.email === email);

	if (!user) {
		return res.status(401).json({ error: 'User not found' });
	}

	if (user.password !== password) {
		return res.status(401).json({ error: 'Incorrect password' });
	}

	const token = generateToken(user);
	res.json({
		message: 'Login successful',
		name: user.name,
		userId: user.id,
		token,
	});
});

const userData: (typeof UserData)[] = [
	{
		id: 1,
		status: 'Expired',
		dateStart: '01/01/2023',
		dateEnd: '04/01/2023',
		consumption: null,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png',
		country: 'Colombia',
		plan: '4 days, 3GB',
	},
	{
		id: 1,
		status: 'Expired',
		dateStart: '01/01/2023',
		dateEnd: '04/01/2023',
		consumption: null,
		flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png',
		country: 'Colombia',
		plan: '4 days, 3GB',
	},
	{
		id: 1,
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
		id: 1,
		status: 'Active',
		dateStart: '06/10/2023',
		dateEnd: '16/10/2023',
		consumption: {
			totalConsumption: 12582912,
		},
		flag: 'https://stuffedeyes.files.wordpress.com/2018/06/spain-2906824_960_720.png?w=960',
		country: 'Spain',
		plan: '10 days, 12GB',
	},
];

server.get('/api/users/:id/data', verifyToken, (req: any, res: any) => {
	const userId = req.params.id;
	const user = users.find((u) => u.id === parseInt(userId, 10));

	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	const userSpecificData = userData.filter((data) => data.id === user.id);

	if (userSpecificData.length > 0) {
		res.json(userSpecificData);
	} else {
		res.status(404).json({ error: 'User data not found' });
	}
});

server.get('/api/users/:id/profile', verifyToken, (req: any, res: any) => {
	const userId = req.params.id;
	const user = users.find((u) => u.id === parseInt(userId, 10));

	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	const userProfile = {
		id: user.id,
		name: user.name,
	};
	res.json(userProfile);
});

server.listen(PORT, (err: Error) => {
	if (err) throw err;
	console.log(`> Ready on http://localhost:${PORT}`);
});
