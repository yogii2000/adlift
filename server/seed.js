// seed.js
const mongoose = require('mongoose');
const products = require('./modals/product')
const connectDB = require('./index'); // Adjust path to your connection file

// Call the connectDB function to connect to MongoDB

connectDB();
const seedProducts = [
    { name: 'IPhone 12 pro ', data:{color:"red",capacity:"32 Gb"} },
    { name: 'Realme 9 ', data:{color:"blue",capacity:"128 Gb"} },
    { name: 'Samsung s12 ', data:{color:"red",capacity:"128 Gb"} },
  ];

const seedDB = async () => {
    try {
      await products.insertMany(seedProducts);
      console.log('Products seeded successfully');
    } catch (error) {
      console.error('Error seeding data:', error);
    } finally {
      mongoose.connection.close(); // Close the connection when done
    }
  };
  
  seedDB();
