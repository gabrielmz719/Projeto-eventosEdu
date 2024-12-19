"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
var indexRoute_1 = require("./routes/indexRoute");
dotenv.config();
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRoute_1.default);
app.listen(PORT, function () {
    console.log("Sevidor rodando na porta ".concat(PORT));
});
