'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _area = require('../data/area.json');

var _area2 = _interopRequireDefault(_area);

var _route_ = require('../data/route_1.json');

var _route_2 = _interopRequireDefault(_route_);

var _route_3 = require('../data/route_2.json');

var _route_4 = _interopRequireDefault(_route_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();
var apiRoutes = _express2.default.Router();

apiRoutes.get('/area', function (req, res) {
    res.status(200).json(_area2.default);
});

apiRoutes.get('/route/:id', function (req, res) {
    if (req.params.id == '1') res.status(200).json(_route_2.default);else res.status(200).json(_route_4.default);
});

exports.default = apiRoutes;