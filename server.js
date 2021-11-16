// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const fs = require("fs")

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html")
});


// your first API endpoint... 

app.get("/api/:date", function (req, res) {
  
  if (new Date(+req.params.date).toString() === "Invalid Date" && new Date(req.params.date).toString() === "Invalid Date"){
    console.log({ error: "Invalid Date" })
    res.json({ error: "Invalid Date" })
  }else if (new Date(req.params.date).toString() === "Invalid Date"){
    
    date = new Date(+req.params.date)
    const json = {
      unix: +req.params.date,
      utc: date.toUTCString()
    }
    console.log(json)
    res.json(json)
    
  }else if(new Date(+req.params.date).toString() === "Invalid Date"){
    date = new Date(req.params.date)
    a = Math.floor(date)
    date = new Date(a)
    const json = {
      unix: Math.floor(date),
      utc: date.toUTCString()
    }
    console.log(json)
    res.json(json)
  }
  
  
  
});


app.get("/api/", (req, res) => {
  
  
  date = new Date()
  a = Math.floor(date)
  date = new Date(a)
 
  const json = {
    unix: Math.floor(date),
    utc: date.toUTCString()
  }
  console.log(json)

  res.json(json)
  
})



// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
