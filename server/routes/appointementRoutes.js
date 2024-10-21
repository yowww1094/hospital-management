import express from 'express';
import { getAllAppointements, getOneAppointement, createAppointement, updateAppointement, deleteAppointement } from '../controllers/appointementController.js'

const router = express.Router();

router.get('/', getAllAppointements);
router.get('/:id', getOneAppointement);
router.post('/', createAppointement);
router.put('/:id', updateAppointement);
router.delete('/:id', deleteAppointement);

export default router;