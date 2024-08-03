// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const config = require('config');

const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
        // userNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        })

        console.log('MongoDB connected...');
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

// const connectDB = () => {
//     mongoose.connect(db, {
//     userNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     }).then(()=> console.log('MongoDB is connected!'))
//     .catch(err => {
//         console.error(err.message);
//         process.exit(1);
//     });
// };

module.exports = connectDB;