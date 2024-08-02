// Imports
import express from 'express';
import {
   listarDepas,
   obtenerDepa,
   registrar_depa,
   modificarDepa,
   eliminarDepa
} from "../Controllers/Controller.js";

// Config 
const router = express.Router();

router.get('/', listarDepas);
router.get('/:id', obtenerDepa);
router.post('/registrar', registrar_depa);
router.put('/:id', modificarDepa);
router.delete('/:id', eliminarDepa);

// Export
export default router;
