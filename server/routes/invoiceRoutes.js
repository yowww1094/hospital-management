import express from 'express';
import { getAllInvoices, getOneInvoice, createInvoice, updateInvoice, deleteInvoice } from '../controllers/invoiceController.js'

const router = express.Router();

router.get('/', getAllInvoices);
router.get('/:id', getOneInvoice);
router.post('/', createInvoice);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);

export default router;