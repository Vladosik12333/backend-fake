import express from 'express';
import db from './config/database.js';
import EventsRouter from './routes/EventsRouter.js';
import UsersRouter from './routes/UsersRouter.js';
import cors from 'cors';
const port = process.env.PORT || 5000;

const app = express();
try {
  await db.authenticate();
  console.log('Database connected...');
} catch (error) {
  console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/events', EventsRouter);
app.use('/users', UsersRouter);
app.listen(port, () => console.log('Server running at port 5000'));
