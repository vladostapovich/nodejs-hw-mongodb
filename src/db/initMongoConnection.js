import mongoose from 'mongoose';
import { env } from '../utils/getEnvVar.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const pass = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pass}@${url}/${db}?retryWrites=true&w=majority&tls=true&appName=Cluster0`,
    );

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Error while setting up mongo connection:', error);
    throw error;
  }
};
