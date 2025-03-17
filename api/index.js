const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
//const userRoutes = require('./routes/userRoutes');
const complaintsRoutes = require('./routes/complaintRoutes');

const cors = require('cors');





// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Enable CORS for all domains
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);
app.use('/api/complaints', complaintsRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('Waste Management System API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});