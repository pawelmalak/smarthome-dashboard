import { join } from 'path';
import express from 'express';
import { config } from 'dotenv';
import expressWs from 'express-ws';
import { dummyData } from './utils';

// import routes
import { devicesRouter } from './routes';

// load env
config({ path: 'config/.env' });

// config app
const PORT = process.env.PORT || 5000;
const { app } = expressWs(express());
app.use(express.json());
app.use(express.static(join(__dirname, '../public')));

// serve client app
app.get(/^\/(?!api)/, (req, res) => {
  res.sendFile('public/index.html');
});

// setup routes for api
const apiBasePath = '/api/v1';

app.use(`${apiBasePath}/devices`, devicesRouter);

app.ws(`${apiBasePath}/devices/refresh`, (ws, req) => {
  setInterval(() => {
    const data = dummyData();
    ws.send(JSON.stringify(data));
  }, 5000);
});

// start server
app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
