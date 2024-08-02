// Imports
import express from 'express';
import { usuarioConsulta, usuarioIngreso, usuarioUpdate } from '../controllers/usuarioController.js';

// Config 
const router = express.Router();

router.get('/', usuarioConsulta);
router.get('/:id', usuarioConsulta);
router.post('/', usuarioIngreso);
router.put('/update', usuarioUpdate);

// Export
export default router;