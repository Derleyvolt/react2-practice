const express = require('express');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});