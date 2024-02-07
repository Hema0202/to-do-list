const express = require('express');
const mongoose = require('mongoose');
const route = require('./src/routes/route');
const app = express();

mongoose.connect('mongodb://localhost:27017')
.then(()=> console.log('Connected with database...!'))
.catch((err)=>console.log(err.message));

app.use(express.json());
app.use('/',route);

app.listen(process.env.PORT || 3000,(err)=>{
    if(err) console.log(err.message);
    else console.log('Application is running..!');
})