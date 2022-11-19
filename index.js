const express= require('express');
const connectDB = require('./config/db');
const app= express();
const path= require('path')

// Connect Database
connectDB();


// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));





app.get("/",(req,res)=>{
    res.send("Hello World!");
})

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));