const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./database/connect');
require('dotenv').config();

const port = process.env.PORT;

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
    console.log(`Server is listening in port ${port}`)
})