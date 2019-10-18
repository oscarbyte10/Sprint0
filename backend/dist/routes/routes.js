"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medida_controller_1 = require("../controllers/medida.controller");
const express_1 = require("express");
const router = express_1.Router();
router.get('/medidas', medida_controller_1.getMedidas);
router.post('/medidas', medida_controller_1.addMedida);
router.delete('/medidas/:id', medida_controller_1.deleteMedida);
exports.default = router;
//# sourceMappingURL=routes.js.map