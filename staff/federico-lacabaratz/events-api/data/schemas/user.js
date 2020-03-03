const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date, required: true, default: Date.now },
    authenticated: { type: Date },
    retrieved: { type: Date },
    publishedEvents: {type: [ObjectId], ref: 'Event'},
    subscribedToEvent: {type: [ObjectId], ref: 'Event'}
})