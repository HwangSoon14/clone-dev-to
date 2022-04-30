import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
import cookieParser from 'cookie-parser';
import { ErrorHandling } from './Utils/ErrorHandling.js';
import ParentRoute from './routes/ParentRoute.js';

app.use(express.json());
<<<<<<< HEAD
app.use(cors());
=======
app.use(cors({ origin: true, credentials: true }));
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
app.use(cookieParser());

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
<<<<<<< HEAD
const PORT = process.env.PORT || 7000;
=======
const PORT = process.env.PORT || 5000;
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
app.listen(PORT, () => {
	console.log('server is running');
});
