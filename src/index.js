require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRoute = require('./routes/user.route');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/user', userRoute);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
