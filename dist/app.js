"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[0]);
    next();
});
app.get("/", function (req, res) {
    res.send({
        message: "server init at 8000 port",
    });
});
app.get("/cats", function (req, res, next) {
    console.log({
        cats: "CatInfo를 출력합니다.",
    });
    next();
});
app.get("/cats", function (req, res) {
    res.send({
        cats: app_model_1.CatInfos,
    });
});
app.use(function (req, res, next) {
    res.send({
        error: 404,
    });
});
var PORT = 8000;
app.listen(PORT, function () {
    console.log("port : " + PORT + "\uC5D0\uC11C \uC11C\uBC84\uAC00 \uC5F4\uB9BC");
});
//# sourceMappingURL=app.js.map