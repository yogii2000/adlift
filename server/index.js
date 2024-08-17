const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://yogeshsharma:Yogesh1234@adlift-db.6ms8d77.mongodb.net/?retryWrites=true&w=majority&appName=adLift-DB';
// , { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(MONGO_URI ,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
