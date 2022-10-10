const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const recipes = require('./routes/recipes');
// const employees = require('./routes/employees');
// const services = require('./routes/services');
// const beneficiaries = require('./routes/beneficiaries');
// const shifts = require('./routes/shifts');

app.use('/api/recipes', recipes);
// app.use('/api/employees', employees);
// app.use('/api/services', services);
// app.use('/api/beneficiaries', beneficiaries);
// app.use('/api/shifts', shifts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));