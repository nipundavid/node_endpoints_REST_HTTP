const express  = require("express");

var app = express();

var port = process.env.port || 3000;

app.get("/", (req, res)=> {
    res.send("Welcome...!");
});

app.listen(port, () => {
    console.log("server running on port :" + port);
});