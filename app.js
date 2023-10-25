// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");



const app = express();

const items = ["Byu food","Cook food","Eat Food"];
const workItems = [];

// Set the view engine to 'ejs'
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
  
 const day =date.getDate();

  res.render("list", { listTitle: day, items:items });
});

app.post("/",function(req,res){
  const item = req.body.item1;

  items.push(item);
  res.redirect("/");
})



app.post("/work",function(req,res){
  const item = req.body.item1;
  if(req.body.list ==="work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    workItems.push(item);
    res.redirect("/");
  }
  
 
});
app.get("/work",function(req,res){
  res.render("list",{listTitle :"Work list", items: workItems})
});

app.get("/about",function(req,res){
  res.render("about");
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
