import express from 'express';
import { getAllPatients, getOnePatient, createPatient, updatePatient } from '../controllers/patientController.js';

const router = express.Router();

router.get('/', getAllPatients);
router.get('/:id', getOnePatient);
router.post('/', createPatient);
router.put('/:id', updatePatient);

export default router;