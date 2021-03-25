import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_CONNECTION;

export { db };
