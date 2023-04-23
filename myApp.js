let express = require('express');

let app = express();
app.get("/", function(reg,res){
    res.sendFile(__dirname+"/views/index.html")
  })
app.use("/public", express.static(__dirname + "/public"))

app.get("/json", function(req, res){
  res.json({"message": "Hello json"})
})


































 module.exports = app;
