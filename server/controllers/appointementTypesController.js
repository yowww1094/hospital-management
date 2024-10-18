import AppointementType from "../models/AppointementType.js";

const getAllAppointmentTypes = async (req, res) => {
    try {
        const appointementTypes = await AppointementType.find();
        if (!appointementTypes) {
            return res.json({
                status: 400,
                message: "Appointement Types Not found!",
            });
        }
        res.json({
            status: 200,
            appointementTypes
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        })
        console.log('Server Error', error);
    }
};

const createAppointementType = async (req, res) => {
    try {
        const { type, description } = req.body;

        const appointementType = await AppointementType.create({type, description});
        if (!appointementType) {
            return res.json({
                status: 400,
                message: "Error While Saving Appointement Type!",
            });
        }
        res.json({
            status: 200,
            appointementType
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        })
        console.log('Server Error', error);
    }
};

const updateAppointementType = async (req, res) => {
    try {
        const { id } = req.query;
        const { type, description } = req.body;

        const updatedAppointementType = await AppointementType.fintByIdAndUpdate(id, {type, description}, {new: true});
        if (!updatedAppointementType) {
            return res.json({
                status: 400,
                message: "Error While Updating Appointement Type!",
            });
        }
        res.json({
            status: 200,
            updatedAppointementType
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        })
        console.log('Server Error', error);
    }
};

const deleteAppointementType = async (req, res) => {
    try {
        const { id } = req.query;

        const deletedAppointementType = await AppointementType.findByIdAndDelete(id);
        if (!deletedAppointementType) {
            return res.json({
                status: 400,
                message: "Error While deleting Appointement Type!",
            });
        }
        res.json({
            status: 200,
            deletedAppointementType
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        })
        console.log('Server Error', error);
    }
};

export default {
    getAllAppointmentTypes,
    createAppointementType,
    updateAppointementType,
    deleteAppointementType
}