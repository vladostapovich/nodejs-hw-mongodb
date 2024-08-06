import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import contactsRouter from '../src/routers/contacts.js';
import { env } from './utils/env.js';
import { notFoundHandler } from './middleware/notFoundHadler.js';
import { errorHandler } from './middleware/errorHadler.js';

const PORT = Number(env('PORT'));
export const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(contactsRouter);
  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
