const myExpress = require("express");
const myBody = require("body-parser");
const myDate = require(__dirname+"/date.js"); // create your own module -- pass functions and data between files
//console.log(myDate()); // exports details from other file comes here

const app = myExpress();

app.set('view engine', 'ejs'); //use ejs as my view engine. //looks in views folder by default
app.use(myBody.urlencoded({
  extended: true
}));
app.use(myExpress.static("public")); //use all the files inside public


const todoNames = ["Buy Food", "Cook Food"]; //global variable //const array -- we can change values
let work_list =[];
app.get("/", function(req, res) {
const day = myDate.getDay(); // since we exported multiple functions, using the reuired module tap into required function
  res.render("list", {
    listTitle: day,
    newListItem: todoNames
  }); //render the list(under views using ejs, find the key value pair -- find the key in page and replace it with value)
});

app.post("/", function(req, res) {
  const todoName = req.body.newItem;

  if(req.body.list === "Work"){
    work_list.push(todoName);
    res.redirect("/work");
  }else{
    todoNames.push(todoName);
    res.redirect("/");
  }
  //cant use render twice... So as soon as we come post "/", we save value of todo and redirect to get "/" so that it renders together.
});

app.get("/work",function(req,res){
  res.render("list", {
    listTitle: "Work",
    newListItem: work_list
  });
})

app.post("/work",function(req, res){
  let item = req.body.newItem;
  work_list.push(item);
  res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(8085, function() {
  console.log("Server started at port 8085");
});
