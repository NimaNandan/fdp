// importing
const express = require("express");

const empModel = require('./model/model')
const cors = require('cors');

// 2. initializing
const app = new express();
// API creation
// app.get(url,callbackfn)
app.get('/',(req,res)=>{
    res.send("hai")
})
app.get('/about',(req,res)=>{
    res.send("About page")
})
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send("hi post")
})

//adding data to db
app.post('/new', (req,res)=>{
    console.log(req.body)
    new empModel(req.body).save();
    res.send("data added to db");
})

//get
app.get('/view',async(req,res)=>{
    var data = await empModel.find();
    res.send(data);
})

//delete
app.delete('/remove/:id', async(req,res)=>{
    let id = req.params.id 
    await empModel.findByIdAndDelete(id)
    res.send("data deleted")
})

//update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id;
    await empModel.findByIdAndUpdate(id,req.body)
    res.send("data updated");
})

//port
app.listen(3005,(req,res)=>{
    console.log("Port is running in 3005")
})