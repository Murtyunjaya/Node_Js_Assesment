const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;


const buildConnection = function() {
    return new Promise(function(resolve, reject) {
        MongoClient.connect('mongodb://localhost:27017/node_assesment',{ useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("node_assesment");
            resolve(dbo);
        });
    });
}

module.exports = buildConnection;
