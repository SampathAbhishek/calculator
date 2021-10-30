const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));//allows nested objects for body-parser.but a convention to expilicitly declare it.

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var height = parseFloat(req.body.n1);
  var weight = parseFloat(req.body.n2);
  var bmi =  weight / (height * height);
  res.send("Your BMI is "+bmi);
});
app.listen(3000,function(){
  console.log("Server with port 3000!... is running");
});
