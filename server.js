const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//var listItems=["Buy Food","Cook Food","Eat Food"];
let listItems=[];
let workItems=[];
let date=new Date();
let dateNumber=(date.getDate())%7;

let dayOfWeek=["Saterday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
let currentDay=dayOfWeek[dateNumber];

app.get("/",function(req,res){
res.render("list",{listTitle: currentDay, listItem:listItems});
})



app.post("/",function(req,res){
  
  if(req.body.list==="Work"){
    let listItem=req.body.listItem;
    workItems.push(listItem);
    res.redirect("/work");
  }
  else{
    let  listItem=req.body.listItem;
    listItems.push(listItem);
    res.redirect("/");
  }
  
})

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",listItem:workItems})
})

app.get("/about",function(req,res){
  res.render("about.ejs");
})


app.listen(3000,function(){
    console.log("Server is ok");
})