var mongoose = require('mongoose');
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("UserModel", userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findGoingEventsByUser = findGoingEventsByUser;
userModel.findSavedEventsByUser = findSavedEventsByUser;
userModel.findPostEventsByUser = findPostEventsByUser;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;


module.exports = userModel;


function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findById(userId, function(err, user) {
    console.log(user);
  });
}

function findUserByUsername(username) {
  console.log(username);
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function findGoingEventsByUser(userId) {
  return userModel.findById(userId).select('+goingevents');
}

function findSavedEventsByUser(userId) {
  return userModel.findById(userId).select('+savedevents')
}

function findPostEventsByUser(userId) {
  return userModel.findById(userId).select('+postevents');
}

function updateUser(userId, user) {
  return userModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return userModel.remove({_id: userId});
}
