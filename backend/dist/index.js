"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./database/database");
const PORT = app_1.default.get('port');
app_1.default.listen(PORT, () => {
    console.log(`Servidor en puerto: ${PORT}: Conectado`);
});
//# sourceMappingURL=index.js.map