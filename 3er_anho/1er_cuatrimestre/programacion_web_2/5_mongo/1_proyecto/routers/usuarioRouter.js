import express from 'express';
import { consultaUsuario, ingresoUsuario, modificacionUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', consultaUsuario);
router.post('/', ingresoUsuario);
router.put('/modificacion', modificacionUsuario);

export default router;