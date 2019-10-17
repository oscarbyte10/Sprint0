import express, { Application } from 'express';
import {Config} from './config/config';
import middleware from './middleware';
import routes from './routes/routes';

const app: Application = express();
const config: Config = new Config();

app.set('port', config.port);

app.use(middleware);

app.use('/api', routes);

export default app;