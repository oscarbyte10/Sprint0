"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Medida_1 = __importDefault(require("../models/Medida"));
exports.getMedidas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Medida_1.default.find({}, (err, medidas) => {
        if (err)
            return res.status(500).send(err);
        res.status(200).send({ medidas });
    });
});
exports.addMedida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let medida = new Medida_1.default({
        valor: req.body.valor,
        fecha: Date.now()
    });
    yield medida.save((err, medidaSaved) => {
        if (err)
            throw err;
        res.status(200).send({ medida: medidaSaved });
    });
    res.status(200);
});
exports.deleteMedida = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let medidaId = req.params.id;
    yield Medida_1.default.findById(medidaId, (err, medida) => {
        if (err)
            res.status(500).send(err);
        if (medida != null)
            medida.remove(err => {
                if (err)
                    res.status(500).send(err);
                res.status(200).send(`La medida con fecha ${medida.fecha} ha sido eliminado correctamente.`);
            });
    });
});
//# sourceMappingURL=medida.controller.js.map