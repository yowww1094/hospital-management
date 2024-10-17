import Hospital from "../models/Hospital";

const getHospital = async (req, res) => {
    try {
        const hospital = await Hospital.find();
        if (!hospital) {
            return res.json({
                status: 404,
                message: "No Hospital Data Found!"
            });
        }
        res.json({
            status: 200,
            hospital
        });
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const createHospital = async (req, res) => {
    try {
        const { name, address, phone1, phone2, email, rc, ice } = req.body;

        const hospital = await Hospital.create({ name, address, phone1, phone2, email, rc, ice });
        if (!hospital) {
            return res.json({
                status: 400,
                message: "Error while saving..."
            });
        }
        res.json({
            status: 200,
            hospital
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

const updateHospital = async (req, res) => {
    try {
        const { id } = req.query.id;
        const { name, address, phone1, phone2, email, rc, ice } = req.body;

        const hospital = await Hospital.findByIdAndUpdate({ name, address, phone1, phone2, email, rc, ice }, { new: true });
        if (!hospital) {
            return res.json({
                status: 400,
                message: "Error while updating..."
            });
        }

        res.json({
            status: 200,
            hospital
        })
    } catch (error) {
        res.json({
            status: 500,
            message: "Something Went Wrong!"
        });
        console.log("Server Error", error);
    }
};

export default {
    getHospital, 
    createHospital,
    updateHospital
};