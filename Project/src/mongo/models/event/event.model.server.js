var mongoose = require('mongoose');
var eventSchema = require("./event.schema.server");
var eventModel = mongoose.model("EventModel", eventSchema);

eventModel.createEventForUser = createEventForUser;
eventModel.findPostEventsByUser = findPostEventsByUser;
eventModel.findEventById = findEventById;
eventModel.updateEvent = updateEvent;
eventModel.deleteEvent = deleteEvent;

module.exports = eventModel;

function createEventForUser(userId, event) {
  event['_user'] = userId;
  return eventModel.create(event);
}

function findPostEventsByUser(userId) {
  return eventModel.find({creator: userId});
}

function findGoingEventsByUser(userId) {
  return eventModel.find({attendees: userId});
}

function findEventById(eventId) {
  return eventModel.findOne({_id:eventId});
}

function updateEvent(eventId, event) {
  return eventModel.update({_id: eventId},event);
}
function deleteEvent(eventId) {
  return eventModel.remove({_id: eventId});
}
