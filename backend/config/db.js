const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MongoDB connection without deprecated options
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
