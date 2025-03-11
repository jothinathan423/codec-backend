const express = require('express');
const connectDb = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
connectDb();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/api'));

const port = 5000;
app.listen(port, () => {
    console.log("Server running on 5000");
});


