let express = require('express');
let app = express();

app.get("/:word/echo", function(req,res,next){
  console.log(req.params.word)
  res.json({"echo":req.params.word})
})

app.use("/",function(req,res,next){
  console.log(req.method+ " " + req.path + " - " +  req.ip);
  next();
})


app.get("/now",function(req,res,next){
  var requestDate = new Date().toString();
  req.time = requestDate;
  next();
  },
  function(req,res,next){
    res.json({"time":req.time})
  }
)

app.get("/", function(reg,res,next){
    res.sendFile(__dirname+"/views/index.html")
  })

app.use("/public", express.static(__dirname + "/public"))

app.get("/json", function(req, res){
  if (process.env.MESSAGE_STYLE == "uppercase"){
    res.json({"message": "HELLO JSON"})
  }
  else {
      res.json({"message": "Hello json"})
  }
}
)




































 module.exports = app;
