// Imports
import express from 'express';
import {
   listarUsuarios,
   obtenerUsuario,
   registrarUsuario,
   modificarUsuario,
   eliminarUsuario
} from "../Controllers/usuarioController.js";

// Config 
const router = express.Router();

router.get('/', listarUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/registrar', registrarUsuario);
router.put('/update', modificarUsuario);
router.delete('/:id', eliminarUsuario);

// Export
export default router;
