//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let list=["Food","Game","mobile"];
let workItem=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  let today = new Date();
  let option={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
 let day= today.toLocaleDateString("en-US",option);

res.render("list",{header:day,data:list});
});
app.post("/",function (req,res) {
  let itemAdd=req.body.itemAdded
if(req.body.button==="work"){
  workItem.push(itemAdd);
  res.redirect("/work");
}
else{
  list.push(itemAdd);
  res.redirect("/");
}
});


app.get("/work",function (req,res) {
  res.render("list",{header:"work List",data:workItem})
});
app.post("/worl",function (req,res) {

  list.push(req.body.itemAdded);
  res.redirect("/work");
});

app.listen(process.env.PORT||3000, function(){
  console.log("Server started on port 3000.");
});
