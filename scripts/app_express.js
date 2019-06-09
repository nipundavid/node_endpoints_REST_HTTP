const express  = require("express");


const app = express();
const bookRouter = express.Router();

var port = process.env.port || 3000;

//router created
bookRouter.route("/books")
    .get((req,res)=> {
        const response = {hello : "this is my api"};

        res.json(response);
    });

//added in middleware
app.use("/api", bookRouter);

app.get("/", (req, res)=> {
    res.send("Welcome...!");
});

app.listen(port, () => {
    console.log("server running on port :" + port);
});