import Express from 'express'
import apiRoutes from './controllers/api'

const app = new Express();
const port = process.env.PORT || 3000;


app.use('/api',apiRoutes);

app.listen(port, (error) => {
    if (error){
        console.error(error)
    } else {
        console.info(`listening on ${port}`)
    }
})

import fetch from 'node-fetch';

const fetchData = () => {
    fetch('http://localhost:3000/api/area')
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
        })
        .catch((err) => {
            console.log(err)
        });
}

fetchData()


import { MongoClient } from 'mongodb'


// Connection url
const url = 'mongodb://mongo:27017';

// Database Name
const dbName = 'dev';

MongoClient.connect(url, function (err, client) {

    console.log(err)
    
    // Use the admin database for the operation
    const adminDb = client.db(dbName).admin();
    // List all the available databases
    adminDb.listDatabases(function (err, dbs) {
        console.log(err,dbs.databases);
        client.close();
    });

    const col = client.db(dbName).collection('Video');
    // Show that duplicate records got dropped
    col.find({}).toArray(function (err, items) {
        console.log(err,items);
        client.close();
    });


});

