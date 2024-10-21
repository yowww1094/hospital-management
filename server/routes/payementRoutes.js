import express from 'express';
import { getAllPayements, getOnePayement, createPayement, updatePayement, deletePayement } from '../controllers/payementController.js'

const router = express.Router();

router.get('/', getAllPayements);
router.get('/:id', getOnePayement);
router.post('/', createPayement);
router.put('/:id', updatePayement);
router.delete('/:id', deletePayement);

export default router;