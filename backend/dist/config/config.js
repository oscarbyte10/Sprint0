"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.db = process.env.MONGODB || 'mongodb://localhost:27017/medidas';
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map