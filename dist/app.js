"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Namespace import
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 8000;
app.get("/", function (req, res) {
    res.send("안녕하세요");
});
app.listen(PORT, function () {
    console.log("port : " + PORT + "\uC5D0\uC11C \uC11C\uBC84\uAC00 \uC5F4\uB9BC");
});
//# sourceMappingURL=app.js.map