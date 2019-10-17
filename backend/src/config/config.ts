import {Credentials } from '../database/credentials';

const credentials: Credentials = new Credentials();

export class Config{

    port: string | number;
    db: string;

    constructor() {
        this.port = process.env.PORT || 3000;
        this.db = `mongodb://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.puerto}/${credentials.database}`
        //this.db = process.env.MONGODB || 'mongodb://localhost:27017/medidas'
    }
}