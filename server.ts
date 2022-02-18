import express from 'express';
import { config } from 'dotenv';

// import routes
import { devicesRouter } from './routes';

// load env
config({ path: 'config/.env' });

// config app
const PORT = process.env.PORT || 5000;
const app = express();

// setup routes
const apiBasePath = '/api/v1';

app.use(`${apiBasePath}/devices`, devicesRouter);

// start server
app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
