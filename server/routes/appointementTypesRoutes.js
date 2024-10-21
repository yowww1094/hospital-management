import express from 'express';
import { getAllAppointmentTypes, createAppointementType, updateAppointementType, deleteAppointementType } from '../controllers/appointementTypesController.js'

const router = express.Router();

router.get('/', getAllAppointmentTypes);
router.post('/', createAppointementType);
router.put('/:id', updateAppointementType);
router.delete('/:id', deleteAppointementType);

export default router;