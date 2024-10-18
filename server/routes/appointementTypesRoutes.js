import express from 'express';
import { getAllAppointmentTypes, createAppointementType, updateAppointementType, deleteAppointementType } from '../controllers/appointementTypesController.js'

const router = express.Router();

router.get('/', getAllAppointmentTypes);
router.post('/', createAppointementType);
router.put('/', updateAppointementType);
router.delete('/', deleteAppointementType);

export default router;