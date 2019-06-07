var http = require("http");

const path = require("path");
const fs = require('fs');
const url = require('url');

var a = path.resolve(__dirname, "../data/HolidayList.json");

let rawdata = fs.readFileSync(path.resolve(__dirname, "../data/HolidaysList.json"));  
let holidays = JSON.parse(rawdata);  


// for(var k in holidays) {
//     // k => key
//     // holidays[k] => value
//     // console.log(holidays[k]);
//     let holidayType = holidays[k];
//     for(let m in holidayType){
//         console.log(m);
//         console.log(holidayType[m]);
//     }
//     console.log("----------------");
//  }

const port = 3000;
const hostname = "127.0.0.1";

http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    console.log('Request Type:' +
        req.method + ' Endpoint: ' +
        reqUrl.pathname);
    // GET Endpoint
    if (reqUrl.pathname == '/sample' && req.method === 'GET') {

        sampleRequest(req, res);
    }

    if(reqUrl.pathname == "/public" && req.method === "GET") {
        getPublicHolidays(req, res);
    }

    if(reqUrl.pathname == "/flexible" && req.method === "GET") {
        getFlexibleHolidays(req, res);
    }
}).listen(port, hostname, ()=> {
    console.log("server is running");
});

function sampleRequest(req, res) {
    const reqUrl = url.parse(req.url, true);
    var name = 'World';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }

    var response = {
        "text": "Hello " + name
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
}

function getPublicHolidays(req, res) {
    const reqUrl = url.parse(req.url, true);
    var response = "This is public holiday";
    if (reqUrl.query.month) {
        for(var k in holidays) {
            let holidayType = holidays[k];
                for(let m in holidayType){
                    if(reqUrl.query.month.toLowerCase() == m.toLowerCase()) {
                        response = holidayType[m];
                    }
                }
         }
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(response));
}

function getFlexibleHolidays(req, res) {
    const reqUrl = url.parse(req.url, true);
    
    var response = "This is fliexible holiday";

    if (reqUrl.query.month) {
        for(var k in holidays) {
            let holidayType = holidays[k];
                for(let m in holidayType){
                    if(reqUrl.query.month.toLowerCase() == m.toLowerCase()) {
                        response = holidayType[m];
                    }
                }
         }
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(response));
}
