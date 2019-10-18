import express, { Application } from 'express';
import {Config} from './config/config';
import middleware from './middleware';
import routes from './routes/routes';

const app: Application = express();
const config: Config = new Config();

app.set('port', config.port);

app.use(middleware);

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.use('/api', routes);

export default app;