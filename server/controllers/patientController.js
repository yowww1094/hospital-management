import Patient from "../models/Patient.js";

const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        if (!patients) {
            return res.json({
                status: 400,
                message: "No Patients Found!"
            });
        }
        res.json({
            status: 200,
            patients
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
    }
};

const getOnePatient = async (req, res) => {
    try {
        const { id } = req.query;
        const patient = await Patient.find({id});
        if (!patient) {
            return res.json({
                status: 400,
                message: "Patient not found!"
            });
        }
        res.json({
            status: 200,
            patient
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
    }
};

const createPatient = async (req, res) => {
    try {
        const { name, gender, age, idCard, phone } = req.body;

        const patient = await Patient.create({name, gender, age, idCard, phone});
        if (!patient) {
            return res.json({
                status: 400,
                message: "Error while saving patient!"
            });
        }
        res.json({
            status: 200,
            message: "Patient Created Successfully!",
            patient
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
    }
};

const updatePatient = async (req, res) => {
    try {
        const { id } = req.query;
        const { name, gender, age, description, idCard, phone, email } = req.body;

        const updatedPatient = await Patient.findByIdAndUpdate(id, {name, gender, age, description, idCard, phone, email}, {new: true});
        if (!updatedPatient) {
            return res.json({
                status: 400,
                message: "Error while updating patient!"
            });
        }
        res.json({
            status: 200,
            message: "Patient Updated Successfully!",
            patient
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
    }
};

export {
    getAllPatients,
    getOnePatient,
    createPatient,
    updatePatient,
}