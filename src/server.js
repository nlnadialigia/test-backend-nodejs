import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { db } from './config/db.js';
import { router } from './routes/index.js';
import { swaggerFile } from './swagger.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('MongoDB is running!');
  } catch (error) {
    console.error(`MongoDB connection error - ${error}`);
    process.exit();
  }
})();

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(3390, () => {
  console.log('Serving is running');
});
