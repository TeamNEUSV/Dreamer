var eventModel = require('../models/event/event.model.server');

module.exports = function(app) {
  app.post("/api/user/:userId/event", createEvent);
  app.get("/api/user/:userId/event", findAllEventsForUser);
  app.get("/api/event/:eventId", findEventById);
  app.put("/api/event/:eventId", updateEvent);
  app.delete("/api/wevent/:eventId", deleteEvent);


  function createEvent(req, res) {
    var userId = req.params['userId'];
    var newEvent = JSON.parse(Object.keys(req.body)[0]);
    console.log("website: " + JSON.stringify(newEvent));
    eventModel.createEventForUser(userId,newEvent)
      .then(function(event) {
        res.json(event);
      });
  }

  function findAllEventsForUser(req, res) {
    var userId = req.params['userId'];
    eventModel.findAllEventsForUser(userId).then(function(events) {
      res.json(events);
    });
  }


  function findEventById(req, res) {
    var eventId = req.params['eventId'];
    eventModel.findEventById(eventId).then(function(event) {
      if (event) {
        res.json(event);
      } else {
        res.json({});
      }
    });
  }

  function updateEvent(req, res) {
    var eventId = req.params['eventId'];
    var event = JSON.parse(Object.keys(req.body)[0]);

    eventModel.updateEvent(eventId, event).then(function(status) {
      res.send(status);
    });
  }


  function deleteEvent(req, res) {
    var eventId = req.params['eventId'];
    eventModel.deleteEvent(eventId).then(function(status) {
      res.send(status);
    });
  }
}
