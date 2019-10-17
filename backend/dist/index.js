"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./database");
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = app_1.default.get('port');
app_1.default.use(body_parser_1.default.json());
app_1.default.listen(PORT, () => {
    console.log(`Servidor en puerto: ${PORT}: Conectado`);
});
//# sourceMappingURL=index.js.map