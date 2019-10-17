"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const app = express_1.default();
const config = new config_1.Config();
// Configuración
app.set('port', config.port);
exports.default = app;
//# sourceMappingURL=app.js.map