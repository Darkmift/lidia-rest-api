const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = process.env

mongoose
  .connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log("🚀 ~ file: mongoose-connection.js ~ line 9 ~ .then ~ connection", {
      dbHost: connection.connections[0].host,
      dbName: connection.connections[0].name
    })
    console.log('connected to DB:', connection.connections[0].name);
  })
  .catch(err => {
    console.error('DB connection failed:', { err, MONGO_CONNECTION_STRING });
  });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));