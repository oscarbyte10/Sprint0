"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const credentials_1 = require("../database/credentials");
const credentials = new credentials_1.Credentials();
class Config {
    constructor() {
        this.port = process.env.PORT || 4000;
        this.db = `mongodb://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.puerto}/${credentials.database}`;
        //this.db = process.env.MONGODB || 'mongodb://localhost:27017/medidas'
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map