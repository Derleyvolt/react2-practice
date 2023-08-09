const express = require('express');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const dotenv     = require('dotenv');
const path       = require('path');
const cors       = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const envPath = path.join(__dirname, 'config', '.env');

dotenv.config({path:envPath})

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});