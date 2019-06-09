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

// import { prototype } from "stream";
// import { Car } from "./models/car";


/*
console.log("Hello World!!!!");
const carID = 12;
*/

/* Rest Arguments
function sendCards(day, ...carIDs) {
    carIDs.forEach(id => console.log(id));
}
sendCards("Monday", 10,20,30);
*/

/* Destructing arrays
 let carIds = [1,2,3];
 let car1, remainingCars;

 [car1, ...remainingCars] = carIds;

 console.log(car1, remainingCars);
 */

 /* Destructing objects
 let car = {id : 5000, style : 'convertible'};
 let {id, style} = car;

 console.log(id, style);
 */

 /* Spread function
 function startCars(a,b,c) {
     console.log(a,b,c);
 }

 let carId = "abc";
 startCars(...carId);
*/

/* closure
let app =  (function(){
    
    let carId = "dsd";

    let getId = function() {
        return carId;
    };

    return{
        getId : getId
    };
})();

console.log(app.getId());
*/


/* call and apply
let o =  {
    carId: 123,
    nameId:767,
    getCId: function() {
        return this.nameId;
    },

    getAId: function(prefix, arg) {
        return prefix + this.nameId + arg;
    }
};

let newCar = {carId: 546, nameId:12};

console.log(o.getCId.call(newCar));
console.log(o.getAId.apply(newCar, ["ID "," dsa"]));
*/

/* Bind function
let o =  {
    carId: 123,
    nameId:767,
    getCId: function() {
        return this.carId;
    },

    getAId: function(prefix, arg) {
        return prefix + this.nameId + arg;
    }
};

let newCar = {carId: 546};

let newFn = o.getCId.bind(newCar);

console.log(newFn());
*/


/* Constructor functions
function Car(id) {
    this.carId = id;
    this.start =()=> {
        console.log("start " + this.carId);
    };    
}

let vehical = new Car(123);
vehical.start();
*/

/* Basic prototype
function Car(carId) {
    this.carId = carId;
}

Car.prototype.start = function()  {
    console.log(this.carId);
};

let myCar = new Car(123);
myCar.start();
*/

/* Prototype
String.prototype.hello = function(arg) {
    return this.toString()+" Hello";
};

console.log("Me ".hello());
*/

/*
//converting Array to JSON
let carIds = [
        {carId: 123},
        {carId: 456},
        {carId: 789}
];

console.log(JSON.stringify(carIds));


//Parsing the JSON
let jsonIn = `[
    {"carId" : 123},
    {"carId" : 456},
    {"carId" : 789}
]`;

let carId_ = JSON.parse(jsonIn);
console.log(carId_);
*/


/* iteration of array
let carIds = [
    {carId : 123, style : "sedan"},
    {carId : 456, style : "convertible"},
    {carId : 789, style : "sedan"}
];

carIds.forEach((car, index) =>console.log(car, index));

let result = carIds.every(
    car => car.carId < 500
);

let convertible = carIds.filter(
    c => c.style ==="convertible"
);

let result_ = carIds.find(
    car => car.carId < 500
);

console.log(convertible);

console.log(result);

console.log(result_);
*/

/* classes
class Car {
    constructor(id) {
        this.id = id;
    }
}

let car = new Car(123);
car.id = 456;
console.log(car);
*/

/* methods
class Car {
    constructor(id) {
        this.id = id;
    }

    identify() {
        return this.id;
    }
}

let car = new Car(123);
console.log(car.identify());
*/


/* Inheritance
class Vehical {
    constructor() {
        this.type = "car";
    }

    Start() {
        return this.type;
    }
}

class Car extends Vehical {
    constructor() {
        super();
    }

    Start() {
        return "from car: " + super.Start();
    }
}

let car = new Car();
console.log(car.Start());
*/


/* Modules
import { Car_ } from './models/car.js';
let car = new Car_(123);
console.log(car.id);
*/

/* Try catch
try {
    let car = newCar;
}catch(error) {
    console.log("error", error);
}

finally {
    console.log("this is always execute");
}
*/

/* Promises
let promise = new Promise(
    function(resolve, reject) {
        setTimeout(resolve, 1000, "someValue");
    }
);

promise.then (
    value => console.log("fulfilled: "+value),
    value => console.log("rejected: "+value)
);
*/

/* Event Emitter
var EventEmitter = require ("events").EventEmitter;

var getResponse  = function() {
    var e = new EventEmitter();

    e.emit("start");
    setInterval(()=>{
        e.emit('end');
    },1000);
    // e.emit("end");
    return e;   
    
    // var e = new EventEmitter();
    // process.nextTick(function () {
    //     var count = 0;
    //     e.emit("start");
    //     var t = setInterval(function() {
    //         e.emit("end");
    //     },10);
    // });

    // return e;
};

var r = getResponse();

r.on("start", function() {
    console.log("In Start");
});

r.on("end", function() {
    console.log("In end");
});
*/







/* HTTP Request
var http = require("http");

var options = {
    host:"www.google.com",
    port : 80,
    path: "/",
    method : "Get"
};

console.log("making a request");

var req = http.request(options, function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();
*/


// var http = require("http");

// var server = http.createServer((req, res)=> {
//     res.writeHead(200,{"Content-Type" : "text/plain"});
    
// });