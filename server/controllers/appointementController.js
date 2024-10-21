import Appointement from "../models/Appointement.js";

const getAllAppointements = async (req, res) => {
    try {
        const appointements = await Appointement.find();
        if (!appointements) {
            return res.json({
                status: 400,
                mesaage: "No Appointements Found!"
            });
        }
        res.json({
            status: 200,
            appointements
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const getOneAppointement = async (req, res) => {
    try {
        const { id } = req.query;
        const appointement = await Appointement.find({id});
        if (!appointement) {
            return res.json({
                status: 400,
                message: "Appointement not Found!"
            });
        }
        res.json({
            status: 200,
            appointement
        })
    } catch (error) {
        res.json({
            status: 500, 
            message: "Something Went Wrong!"
        })
        console.log("Server Error", error);
    }
};

const createAppointement = async (req, res) => {
    try {
        const { patient, doctor, date, description, appointementType } = req.body;
        const appointement = await Appointement.create({patient, doctor, date, description, appointementType});
        if (!appointement) {
            return res.json({
                status: 400,
                message: "Error While saving Appointement!"
            });
        }
        res.json({
            status: 200,
            appointement
        })
    } catch (error) {
        res.json({
            status: 500, 
            message: "Something Went Wrong!"
        })
        console.log("Server Error", error);
    }
};

const updateAppointement = async (req, res) => {
    try {
        const { id } = req.query;
        const { patient, doctor, date, description, appointementType } = req.body;

        const appointement = await Appointement.findByIdAndUpdate(id, {patient, doctor, date, description, appointementType}, { new: true });
        if (!appointement) {
            return res.json({
                status: 400,
                message: "Error While updating Appointement!"
            });
        }
        res.json({
            status: 200,
            appointement
        })
    } catch (error) {
        res.json({
            status: 500, 
            message: "Something Went Wrong!"
        })
        console.log("Server Error", error);
    }
};

const deleteAppointement = async (req, res) => {
    try {
        const { id } = req.query;
        const appointement = await Appointement.findByIdAndDelete(id);
        if (!appointement) {
            return res.json({
                status: 400,
                message: "Error While deleting Appointement!"
            });
        }
        res.json({
            status: 200,
            appointement
        })
    } catch (error) {
        res.json({
            status: 500, 
            message: "Something Went Wrong!"
        })
        console.log("Server Error", error);
    }
};

export {
    getAllAppointements,
    getOneAppointement,
    createAppointement,
    updateAppointement,
    deleteAppointement
}