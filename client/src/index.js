// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'C:\Users\Dell\Desktop\components\tailwind.css'; // Import Tailwind CSS
import App from './App';

ReactDOM.render( < App/> , document.getElementById('root'));

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemController = require('C:\Users\Dell\Desktop\components\itemcontroller.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
itemController.connectDB();

// Your API endpoints for CRUD operations using MongoDB
// ...

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});