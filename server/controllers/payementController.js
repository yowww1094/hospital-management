import Payement from '../models/Payement.js';

const getAllPayements = async (req, res) => {
    try {
        const payements = await Payement.find();
        if (!payements) {
            return res.json({
                status: 400,
                mesaage: "No Payements Found!"
            });
        }
        res.json({
            status: 200,
            payements
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const getOnePayement = async (req, res) => {
    try {
        const { id } = req.query;
        const payement = await Payement.findBy(id);
        if (!payement) {
            return res.json({
                status: 400,
                mesaage: "Payement Not Found!"
            });
        }
        res.json({
            status: 200,
            payement
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const createPayement = async (req, res) => {
    try {
        const { bill, paidAmt, discount, payType } = req.body;
        const payement = await Payement.create({ bill, paidAmt, discount, payType });
        if (!payement) {
            return res.json({
                status: 400,
                mesaage: "Error While creating Payement!"
            });
        }
        res.json({
            status: 200,
            payement
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const updatePayement = async (req, res) => {
    try {
        const { id } = req.query;
        const { bill, paidAmt, discount, payType } = req.body;

        const payement = await Payement.findByIdAndUpdate(id, {bill, paidAmt, discount, payType}, {new: true});
        if (!payement) {
            return res.json({
                status: 400,
                mesaage: "Error While updating Payement!"
            });
        }
        res.json({
            status: 200,
            payement
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const deletePayement = async (req, res) => {
    try {
        const { id } = req.query;
        const payement = await Payement.findByIdAndDelete(id);
        if (!payement) {
            return res.json({
                status: 400,
                mesaage: "Error While deleting Payement!"
            });
        }
        res.json({
            status: 200,
            payement
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
    getAllPayements,
    getOnePayement,
    createPayement,
    updatePayement,
    deletePayement
};