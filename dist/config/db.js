"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
const config = require('config');
const db = config.get('mongoURI');
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(db, {
        // userNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        });
        console.log('MongoDB connected...');
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
});
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