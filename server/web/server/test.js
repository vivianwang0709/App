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

//fetchData()


import {MongoClient} from 'mongodb'



// Connection url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'dev';

MongoClient.connect(url, function(err, client) {
    // Use the admin database for the operation
    const adminDb = client.db(dbName).admin();
    // List all the available databases
    adminDb.listDatabases(function(err, dbs) {
      console.log(dbs.databases);
      client.close();
    });

    const col = client.db(dbName).collection('Video');
    // Show that duplicate records got dropped
    col.find({}).toArray(function(err, items) {
      console.log(items);
      client.close();
    });


  });