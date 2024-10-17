import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import bodyParser from 'body-parser';

import dbConnection from './config/dbConnection.js'; 

import hospitalRoutes from './routes/hospitalRoutes.js';

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

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))