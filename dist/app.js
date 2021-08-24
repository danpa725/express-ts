"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
    console.log(req.rawHeaders[0]);
    next();
});
app.get("/cats", function (req, res) {
    try {
        var cats = app_model_1.CatInfos;
        res.status(200).send({
            success: true,
            data: { cats: cats },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "고양이 데이터 조회 실패",
        });
    }
});
app.get("/cats/:id", function (req, res) {
    var catId = req.params.id;
    try {
        var specificCat = app_model_1.CatInfos.find(function (cat) { return cat.id === catId; });
        res.status(200).send({
            success: true,
            data: {
                cat: specificCat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: error,
        });
    }
});
app.post("/cats", function (req, res) {
    try {
        var catData = req.body;
        var updatedData = __spreadArray(__spreadArray([], app_model_1.CatInfos), [catData]);
        res.status(200).send({
            success: true,
            data: { updatedData: updatedData },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "고양이 추가 실패",
        });
    }
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