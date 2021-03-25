import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';

dotenv.config();

const env = process.env;

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${env.USERDB}:${env.PWDDB}@catalog-api.pfomt.mongodb.net/${env.DBNAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    );
    console.log('MongoDB Conectado com sucesso!');
  } catch (error) {
    console.log(`Erro ao conectar no MongoDB - ${error}`);
  }
})();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(env.PORT, () => {
  console.log('Serving is running');
});
