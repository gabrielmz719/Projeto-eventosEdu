"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/', function (req, res, send) {
    res.json('Site eventos');
});
exports.default = router;
