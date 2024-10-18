import express from 'express';
import { getAllDoctors, getOneDoctor, createDoctor, updateDoctor, deactivateDoctor } from '../controllers/doctorController.js'

const router = express.Router();

router.get('/', getAllDoctors);
router.get('/:id', getOneDoctor);
router.post('/', createDoctor);
router.put('/:id', updateDoctor);
router.put('/:id', deactivateDoctor);

export default router;