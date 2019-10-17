"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const middleware_1 = __importDefault(require("./middleware"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const config = new config_1.Config();
app.use(middleware_1.default);
app.set('port', config.port);
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/api', routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map