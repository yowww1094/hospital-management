import mongoose from "mongoose";

const URI = process.env.URI || 'http://localhost:';

const dbConnection = mongoose.connect(URI);

export default dbConnection;