import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000, // 10 seconds
})
.then(() => {
  console.log('Mongo ☁️ database connected.');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
  if (err.name === 'MongoNetworkError') {
    console.error('Make sure your MongoDB instance is running and accessible.');
  }
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose ⚡ connected to db');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected.');
});

process.on('SIGINT', async () => {
  try {
    await mongoose.disconnect();
    console.log('Mongoose connection closed.');
  } catch (err) {
    console.error('Error closing Mongoose connection:', err.message);
  }
  process.exit(0);
});
