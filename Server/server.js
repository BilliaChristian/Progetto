"use strict"
// express
const express = require("express");
const app = express();
var serveStatic = require('serve-static')


app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 8888
app.listen(port)
console.log('server started ' + port);


app.get("/",function(req,res,next){
    res.writeHead(200);
    res.end("HOME");
});