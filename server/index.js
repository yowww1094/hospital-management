import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import bodyParser from 'body-parser';

import dbConnection from './config/dbConnection.js'; 

import hospitalRoutes from './routes/hospitalRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import patientRoutes from './routes/PatientRoutes.js';
import appointementTypesRoutes from './routes/appointementTypesRoutes.js';
import appointementRoutes from './routes/appointementRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import payementRoutes from './routes/payementRoutes.js';

const PORT = process.env.PORT || 8080
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

dbConnection;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello World"
    })
});

app.use('/hospital', hospitalRoutes);
app.use('/doctor', doctorRoutes);
app.use('/patient', patientRoutes);
app.use('/appointement-types', appointementTypesRoutes);
app.use('/appointement', appointementRoutes);
app.use('/invoice', invoiceRoutes);
app.use('/payement', payementRoutes);

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))