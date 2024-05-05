import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import userRoutes from './app/routes/user.routes.js';
import config from './config.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send({ message: 'Hello from express.' });
});

app.use('/api/v1/auth', userRoutes);

app.use((req, res, next) => {
  next(new Error('Not Found'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(config.PORT, () => {
  console.log(`Server running on port 🚀 http://localhost:${config.PORT}`);
});
