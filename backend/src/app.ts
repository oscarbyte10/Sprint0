import express, { Application } from 'express';
import {Config} from './config/config';

const app: Application = express();
const config: Config = new Config();

// Configuración
app.set('port', config.port);

export default app;