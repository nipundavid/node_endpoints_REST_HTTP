const path = require("path");
const fs = require('fs');
var a = path.resolve(__dirname, "../data/HolidayList.json");

let rawdata = fs.readFileSync(path.resolve(__dirname, "../data/HolidaysList.json"));  
let holidays = JSON.parse(rawdata);  

module.exports = holidays;