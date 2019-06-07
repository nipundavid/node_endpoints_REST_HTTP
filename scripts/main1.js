var http = require("http");

const port = 3000;
const hostname = "127.0.0.1";

http.createServer((req, res) => {
    if(req.url == "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello world");
    }else if(req.url == "/nipun") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hi Nipun");
    }else if(req.url == "/login") {
        if(req.method == "POST") {
            console.log("In Post");
            collectRequestData(req, result => {
                res.end(result);
            })
        }else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(`<html><body><form method="POST">First name:<br><input type="text" name="firstname" value="Mickey">
          <br>Last name:<br><input type="text" name="lastname" value="Mouse"><br><br>
          <input type="submit" value="Submit"></form></body></html>`);
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Page not found");
    }
}).listen(port, hostname, function() {
    console.log("Server is running " + port);
});


function collectRequestData(request, callback) {
    let body = "";
    request.on("data", chunk => {
        body+=chunk.toString();
    });
    request.on("end", () => {
        callback(body);
    });
}