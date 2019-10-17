"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medidas_controller_1 = require("./../controllers/medidas.controller");
const express_1 = require("express");
const router = express_1.Router();
router.get('/medidas', medidas_controller_1.getMedidas);
router.post('/medidas', medidas_controller_1.addMedida);
router.delete('/medidas/:id', medidas_controller_1.deleteMedida);
exports.default = router;
//# sourceMappingURL=routes.js.map