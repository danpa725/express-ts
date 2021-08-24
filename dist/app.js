"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cat_router_1 = require("./cats/router/cat.router");
var Server = (function () {
    function Server() {
        this.PORT = 8000;
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoutes = function () {
        this.app.use(cat_router_1.default);
    };
    Server.prototype.setMiddlewares = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[0]);
            next();
        });
        this.app.use(express.json());
        this.setRoutes();
        this.app.use(function (req, res, next) {
            res.send({
                error: 404,
            });
        });
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.setMiddlewares();
        this.app.listen(this.PORT, function () {
            console.log("port : " + _this.PORT + "\uC5D0\uC11C \uC11C\uBC84\uAC00 \uC5F4\uB9BC");
        });
    };
    return Server;
}());
function serverInit() {
    var server = new Server();
    server.listen();
}
serverInit();
//# sourceMappingURL=app.js.map