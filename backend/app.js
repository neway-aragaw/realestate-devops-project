const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('🏡 Real Estate API (DynamoDB) is running!');
});

module.exports = app;
