/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* 
* Name: Jay AShishbhai Patel
* Student ID: 154925192
* Date: 08 September 2021
*
* Online (Heroku) URL: https://guarded-shelf-01128.herokuapp.com/
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Jay Ashishbhai Patel- 154925192");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);