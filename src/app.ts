import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { rateLimiter } from './rateLimiter';
import pdkiController from './controller/pdki.controller';

const app: Application = express();

app.use(rateLimiter);
app.use(bodyParser.json());

// Routes
app.use('/api/trademark', pdkiController.getTrademarks);

export default app;