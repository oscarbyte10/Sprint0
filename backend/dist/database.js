"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const mongoose_1 = __importDefault(require("mongoose"));
const config = new config_1.Config();
mongoose_1.default.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Base de datos: Conectada'))
    .catch(err => console.log(err));
//# sourceMappingURL=database.js.map