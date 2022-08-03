import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routers/router.js'

dotenv.config();

const server = express();
server.use(express.json(), cors());
server.use(router);

const PORT = 5000 || process.env.PORT;
server.listen(PORT, console.log('Server running successfully.'))