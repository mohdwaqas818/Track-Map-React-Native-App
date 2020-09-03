require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://admin:admin@cluster0.rgh7g.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
});
mongoose.connection.on('connected', () => {
	console.log('You are connected to mongoose');
});
mongoose.connection.on('error', err => {
	console.log('Error connecting mongoose', err);
});

app.get('/', requireAuth, (req, res) => {
	res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});