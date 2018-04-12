var mongoose = require('mongoose');


var connectionString = 'mongodb://127.0.0.1:27017/cs5610'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = 'webdev-mongo';//process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = 'VIcky0124';//process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds243325.mlab.com:43325/heroku_578vp609'; // use yours
}

var db = mongoose.connect(connectionString,{useMongoClient: true});
module.exports = db;
