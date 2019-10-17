import { getMedidas } from './controllers/medidas.controller';
import express, { Application } from 'express';
import {Config} from './config/config';
import middleware from './middleware';
import routes from './routes/routes';

import bodyParser from 'body-parser';

const app: Application = express();
const config: Config = new Config();

app.use(middleware);

app.set('port', config.port);

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

export default app;