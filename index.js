const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const db = require("./models");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

db.sequelize.sync();

const recipes = require('./routes/recipes');

app.use('/api/recipes', recipes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));