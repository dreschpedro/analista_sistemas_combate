// Imports
import express from 'express';
import { productoConsulta, productoIngreso, productoUpdate } from "../controllers/productoController.js";

// Config 
const router = express.Router();

router.get('/', productoConsulta);
router.post('/', productoIngreso);
router.put('/update', productoUpdate);

// Export
export default router;