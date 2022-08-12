// express app
const express = require('express');
const app = express();

// cors
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

// middleware to support JSON requests
app.use(express.json()); 

// .env
require('dotenv').config();
const PORT = process.env.PORT || 8080;

// mongoose database
const connectDB = require('./config/db');
connectDB();

// routes
const partner = require('./routes/partner');
const expense = require('./routes/expense');
const trade = require('./routes/trade')
const reporting = require('./routes/reporting')

// endpoints
app.use('/partners', partner);
app.use('/expenses', expense);
app.use('/trades', trade);
app.use('/reporting', reporting);

// app is alive
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
