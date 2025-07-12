import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/db.js';

dotenv.config({
    path: './.env'
});

connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err)=> {
    console.log('Database connection Failed 😣:', err)
})