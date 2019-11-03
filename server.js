const express = require('express');
const bodyParser = require('body-parser');

// create app
const app = express ();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

// database mongoDB
const dbConfig = require('./config/mydatabase.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

    // connection
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the databse. Exiting now...', err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({"message": "Bienvenue sur l'application Fishing members !"});
});

// fishingmembers routes
require('./app/routes/fishingmembers.routes.js')(app);

// server listening
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});