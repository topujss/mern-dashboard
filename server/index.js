import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import clientRoute from './routes/clientRoute.js';
import { mongodbConnect } from './config/db.js';
import colors from 'colors';

// config
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('/public'));

// make routes
app.use('/client', clientRoute);
// app.use('/general', generalRoute);
// app.use('/management', managementRoute);
// app.use('/sales', salesRoute);

// database setup
const port = process.env.PORT || 5000;

app.listen(port, () => {
  try {
    mongodbConnect();
    console.log(`server running: ${port}`.bgCyan);
  } catch (error) {
    console.log(error.message);
  }
});
