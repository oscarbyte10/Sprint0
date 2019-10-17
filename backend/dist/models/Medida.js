"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MedidaSchema = new mongoose_1.Schema({
    valor: Number,
    fecha: String
});
exports.default = mongoose_1.model('Medida', MedidaSchema);
//# sourceMappingURL=Medida.js.map