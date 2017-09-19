var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var logger = require('morgan')
 
var port = 8080
app.listen(port,function(){
    console.log("Server started")
})
