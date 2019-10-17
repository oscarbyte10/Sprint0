import { getMedidas, addMedida, deleteMedida } from './../controllers/medidas.controller';
import {Router} from 'express';
const router: Router = Router();

router.get('/medidas', getMedidas);
router.post('/medidas', addMedida);
router.delete('/medidas/:id', deleteMedida);

export default router;