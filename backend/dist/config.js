"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor() {
        this.port = process.env.PORT || 4000;
        this.db = process.env.MONGODB || 'mongodb://localhost:27017/shop';
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map