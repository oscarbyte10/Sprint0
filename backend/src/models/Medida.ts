import { Schema, model, Document } from "mongoose";

export interface IMedida extends Document {
    valor: number,
    fecha: string
}

const MedidaSchema = new Schema({
    valor: Number,
    fecha: String
});

export default model<IMedida>('Medida', MedidaSchema);