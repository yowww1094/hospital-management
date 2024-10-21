import Invoice from '../models/Invoice.js';

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find();
        if (!invoices) {
            return res.json({
                status: 400,
                mesaage: "No Invoices Found!"
            });
        }
        res.json({
            status: 200,
            invoices
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const getOneInvoice = async (req, res) => {
    try {
        const { id } = req.query;
        const invoice = await Invoice.find({id});
        if (invoice) {
            return res.json({
                status: 400,
                mesaage: "No Invoice Found!"
            });
        }
        res.json({
            status: 200,
            invoice
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const createInvoice = async (req, res) => {
    try {
        const { patient, doctor, appointement, bill_date, bill_amt } = req.body;
        const invoice = await Invoice.create({ patient, doctor, appointement, bill_date, bill_amt });
        if (!invoice) {
            return res.json({
                status: 400,
                mesaage: "Error While creating Invoice!"
            });
        }
        res.json({
            status: 200,
            invoice
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const updateInvoice = async (req, res) => {
    try {
        const { id } = req.query;
        const { patient, doctor, appointement, bill_date, bill_amt } = req.body;

        const invoice = await Invoice.findByIdAndUpdate(id, { patient, doctor, appointement, bill_date, bill_amt }, { new: true });
        if (!invoice) {
            return res.json({
                status: 400,
                mesaage: "Error While updating Invoice!"
            });
        }
        res.json({
            status: 200,
            invoice
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const deleteInvoice = async (req, res) => {
    try {
        const { id } = req.query;

        const invoice = await Invoice.findByIdAndDelete(id);
        if (!invoice) {
            return res.json({
                status: 400,
                mesaage: "Error While deleting Invoice!"
            });
        }
        res.json({
            status: 200,
            invoice
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

export {
    getAllInvoices,
    getOneInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice
};