import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from "../controllers/usuarios.controller.js";

const router = Router()

//Rutas principales
router.get('/usuarios', getUsuarios)

router.get('/usuarios/:id', getUsuario)

router.post('/usuarios', createUsuario)

router.patch('/usuarios/:id', updateUsuario)

router.delete('/usuarios/:id', deleteUsuario)

export default router;