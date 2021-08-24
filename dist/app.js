"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cat_router_1 = require("./cats/router/cat.router");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
    console.log(req.rawHeaders[0]);
    next();
});
app.use(cat_router_1.default);
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