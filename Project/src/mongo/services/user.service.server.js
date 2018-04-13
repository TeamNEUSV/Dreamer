var userModel = require("../models/user/user.model.server");

module.exports = function(app) {
  app.post("/api/user", createUser);
  app.get("/api/user", findUsers);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  function createUser(req, res) {
    // req.body is an object with structure  { '{"username":"ea","password":"1"}': '' }
    var body = JSON.parse(Object.keys(req.body)[0]);
    console.log(JSON.stringify(body));
    var newUser = {
      email: body.email,
      password: body.password
    };
    console.log(JSON.stringify(newUser));
    userModel.createUser(newUser).then(function(user) {
      res.json(user);
    });
  }
  function findUsers(req, res) {
    var email = req.query['email'];
    var password = req.query['password'];
    console.log(email);
    if(email && password) {
      userModel.findUserByCredentials(email, password).then(function(user) {
        res.json(user);
      });
      return;
    } else if(email) {
      userModel.findUserByEmail(email).then(function(user) {
        res.json(user);
      });
      return;
    }
    res.json({});
  }


  function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel.findUserById(userId).then(function(user) {
      res.json(user);
    });
  }


  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = JSON.parse(Object.keys(req.body)[0]);
    userModel.updateUser(userId, user).then(function(status) {
      res.send(status);
    });
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    userModel.deleteUser(userId).then(function (status) {
      res.send(status);
    })
  }
}
