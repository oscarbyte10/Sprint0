import { Response, Request } from 'express';
import Medida from './../models/Medida';
import { endianness } from 'os';
import { finished } from 'stream';

export const getMedidas =  async (req: Request, res: Response) => {
    await Medida.find({}, (err, medidas) => {
        if(err) return res.status(500).send(err);
        res.status(200).send({medidas});
    })
}

export const addMedida = async (req: Request, res: Response) => {
    
    let medida = new Medida({
        valor: req.body.valor,
        fecha: req.body.fecha
    });
    await medida.save( (err, medidaSaved) => {
        if(err) throw err;
        res.status(200).send({medida: medidaSaved});
    });

    res.status(200);
}
export const deleteMedida = async (req: Request, res: Response) => {
    let medidaId = req.params.id;
    await Medida.findById(medidaId, (err, medida) => {
        if(err) res.status(500).send(err);
        if(medida!= null) medida.remove( err => {
            if(err) res.status(500).send(err);
            res.status(200).send(`La medida con fecha ${medida.fecha} ha sido eliminado correctamente.`);
        });
    });
}
