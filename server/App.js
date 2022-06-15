import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
import cookieParser from 'cookie-parser';
import { ErrorHandling } from './Utils/ErrorHandling.js';
import ParentRoute from './routes/ParentRoute.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
const server = createServer(app);
import socketIO from './SocketIO/SocketIO.js';

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

socketIO(io);

//Route configuration
ParentRoute(app);

//ERROR HANDLING
app.use(ErrorHandling);

//404 NOT FOUND
app.use('*', (req, res) => {
	res.status(404).json({ mess: '404 Not Found' });
});

//CONNECT TO MONGODB
const URI = process.env.MONGO_URL;
mongoose.connect(
	URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) throw err;
		console.log('Connect to mongo db success');
	},
);

//listen to server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
	console.log('server is running');
});
