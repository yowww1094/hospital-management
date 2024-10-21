import express from 'express';
import { getHospital, createHospital, updateHospital } from '../controllers/hospitalController.js';  

const router = express.Router();

router.get('/', getHospital);
router.post('/', createHospital);
router.put('/:id', updateHospital);

export default router;