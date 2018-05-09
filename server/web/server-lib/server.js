'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./controllers/api');

var _api2 = _interopRequireDefault(_api);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();
var port = process.env.PORT || 3000;

app.use('/api', _api2.default);

app.listen(port, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info('listening on ' + port);
    }
});

var fetchData = function fetchData() {
    (0, _nodeFetch2.default)('http://localhost:3000/api/area').then(function (response) {
        return response.json();
    }).then(function (responseData) {
        console.log(responseData);
    }).catch(function (err) {
        console.log(err);
    });
};

fetchData();

// Connection url
var url = 'mongodb://localhost:27017';

// Database Name
var dbName = 'dev';

_mongodb.MongoClient.connect(url, function (err, client) {
    // Use the admin database for the operation
    var adminDb = client.db(dbName).admin();
    // List all the available databases
    adminDb.listDatabases(function (err, dbs) {
        console.log(dbs.databases);
        client.close();
    });

    var col = client.db(dbName).collection('Video');
    // Show that duplicate records got dropped
    col.find({}).toArray(function (err, items) {
        console.log(items);
        client.close();
    });
});