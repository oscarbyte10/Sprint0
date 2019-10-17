import { handleBodyRequestParsing } from './middleware/common';
import express, { Application } from 'express';
import {Config} from './config/config';
import middleware from './middleware';

const app: Application = express();
const config: Config = new Config();

app.use(middleware);

app.set('port', config.port);

export default app;