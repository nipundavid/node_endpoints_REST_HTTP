const url = require('url');

const holidays = require("./parse_holidays.js");


function getFlexibleHolidays(req, res) {
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

module.exports = getFlexibleHolidays;