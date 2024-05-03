// baris baris kode untuk mendifinisikan objek yang akan menampung module/rule/konfigurasi tertentu yang
// akan dipakai/dinisialisasi 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const {sequelize} = require('./models');

const router = require('./routes/router');
const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');

// baris baris kode untuk menginisialisaikan fitur bawaan framework 
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

// sequelize.authenticate().then((error) => {
//     console.log('Db connection has been successfully established');
// }).catch((error) => {
//     console.log('Failed to connect', error);
// });

app.use('/', router);
app.use('/user', userRoute);
app.use('/post', postRoute);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
