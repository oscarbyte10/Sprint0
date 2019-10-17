import { Config } from '../config/config';
import mongoose from 'mongoose';

const config: Config = new Config();

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then( db => console.log('Base de datos: Conectada'))
.catch( err => console.log(err));