const express  = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const db = mongoose.connect("mongodb://localhost/books");
const Book = require(path.resolve(__dirname, "./models/bookModel"));
const bookRouter = require("./routes/bookRouter.js")(Book);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.port || 3000;

//added in middleware
app.use("/api", bookRouter);

app.get("/", (req, res)=> {
    res.send("Welcome...!");
});

app.listen(port, () => {
    console.log("server running on port :" + port);
});