import { Request, Response } from "express";
const express = require('express');
const cors = require('cors');
import path from 'path';
const connectDB = require('./config/db')

const app = express();

connectDB();

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
const PORT = process.env.PORT || 5000;

// Define Routes here
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/books', require('./routes/books'))

// app.get('/', (req: Request, res: Response) => {
// res.json({success:true, message: 'Hope you doing well'})
// })

// All other routes should serve the React app
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});


app.listen(PORT, () => console.log(`listening on port:${PORT}`))