const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Body parser middleware to handle form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mango', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Cors codes
app.use(cors({
    origin: 'http://localhost:3000', //allow only this origin
}));

// Your routes will go here
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);



// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

