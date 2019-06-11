const express  = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const bookRouter = express.Router();

var port = process.env.port || 3000;

const db = mongoose.connect("mongodb://localhost/books");
const Book = require(path.resolve(__dirname, "../models/bookModel"));

//router created
bookRouter.route("/books")
    .get((req,res)=> {
        Book.find((err,books) => {
            if(err){
                res.send(err)
            }else {
                console.log(books);
                res.json(books);
            }
        });
    });

//added in middleware
app.use("/api", bookRouter);

app.get("/", (req, res)=> {
    res.send("Welcome...!");
});

app.listen(port, () => {
    console.log("server running on port :" + port);
});