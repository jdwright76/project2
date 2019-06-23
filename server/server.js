var express = require('express');
var path = require('path');
const fs = require('fs');
const request = require('request');
let port = 8000
var app = express();
app.listen(port, () => {
    console.log("Listening port: " + port);
})

app.get("/", (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname, ".")
    });
})

request('http://ucdpapi.pcr.uu.se/api/gedevents/19.1?pagesize=152616&page=152616,', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.Result);
    JSON.stringify()
    fs.writeFile("moredata.json", JSON.stringify(body.Result), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});