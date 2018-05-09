'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    window.fetch('http://localhost:3000/api/area').then(function (response) {
        return response.json();
    }).then(function (responseData) {
        console.log(responseData);
    }).catch(function (err) {
        console.log(err);
    });
};