import Doctor from "../models/Doctor";

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        if (!doctors) {
            return res.json({
                status: 400,
                message: 'No Doctors Found!'
            });
        }
        res.json({
            status: 200,
            doctors
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const getOneDoctor = async (req, res) => {
    try {
        const { id } = req.query;

        const doctor = await Doctor.find({ _id: id});
        if (!doctor) {
            return res.json({
                status: 400,
                message: 'No Doctor Found!'
            });
        }
        res.json({
            status: 200,
            doctor
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const createDoctor = async ( req, res ) => {
    try {
        const { name, username, email, password, hospital } = req.body;

        const findCDoctor = await Doctor.find({username});
        if (findCDoctor) {
            return res.json({
                status: 400,
                message: 'Username Already Exists!'
            });
        }

        const doctor = await Doctor.create({name, username, email, password, hospital});
        if (!doctor) {
            return res.json({
                status: 400,
                message: 'Error while saving Doctor!'
            });
        }
        res.json({
            status: 200,
            doctor
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const updateDoctor = async (req, res) => {
    try {
        const { id } = req.query;
        const { name, username, password, hospital } = req.body;

        const findCDoctor = await Doctor.find({username});
        if (findCDoctor) {
            return res.json({
                status: 400,
                message: 'Username Already Exists!'
            });
        }

        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {name, username, password})
        if (!updatedDoctor) {
            return res.json({
                status: 400,
                message: 'No Doctor Found!'
            });
        };
        res.json({
            status: 200,
            message: 'Doctor updated Successfully!',
            updatedDoctor
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const deactivateDoctor = async (req,res) => {
    try {
        const { id } = req.query;

        const deactivatedDoc = await Doctor.findByIdAndUpdate(id, { isActive: 0 }, { new: true });
        if (!deactivatedDoc) {
            return res.json({
                status: 400,
                message: 'No Doctor Found!'
            });
        }
        res.json({
            status: 200,
            message: 'Doctor deactivated Successfully!',
            deactivatedDoc
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

export default {
    getAllDoctors,
    getOneDoctor,
    createDoctor,
    updateDoctor,
    deactivateDoctor,
}