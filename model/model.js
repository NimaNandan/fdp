const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nimaaranakkal:aranakkal@cluster0.2tims5u.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected");
})
.catch(err=>console.log(err));

let Schema = mongoose.Schema;
const employeeSchema = new Schema({
    sname:String,
    age:Number,
    pos:String,
    sal:Number
})

var employeeModel= mongoose.model("employees",employeeSchema);
module.exports= employeeModel;