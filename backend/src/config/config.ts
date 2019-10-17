export class Config{

    port: string | number;
    db: string;

    constructor() {
        this.port = process.env.PORT || 3000;
        this.db = process.env.MONGODB || 'mongodb://localhost:27017/medidas'
    }
}