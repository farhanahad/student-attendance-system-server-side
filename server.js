// server.js

const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('./middleware/authenticate');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
app.use((err, _req, res, _next) => {
	console.log(err);
	const message = err.message ? err.message : 'Server Error Occurred';
	const status = err.status ? err.status : 500;

	res.status(status).json({
		message,
	});
});


const { registerController, loginController } = require('./controller/auth');

app.post('/register', registerController);

app.post('/login', loginController);

// Private Route
app.get('/private', authenticate, async (req, res) => {
	let token = req.headers.authorization;
	console.log('I am authenticated', token);
	return res.status(200).json({ message: 'I am a private route' });
});


app.get('/', (req, res) => {
	const obj = {
		name: 'Ayman',
		email: 'ayman@example.com',
	};
	res.json(obj);
});

app.listen(4000, () => {
	console.log("I'm listening on port 4000");
});

connectDB('mongodb://localhost:27017/attendance-db')
	.then(() => {
		console.log('Database Connected');
		app.listen(8000, () => {
			console.log("I'm listening on port 4000");
		});
	})
	.catch((e) => console.log(e));