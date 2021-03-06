var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Mixed = Schema.Types.Mixed;


// Schema
var Event = new Schema({
	type : { type: String },
	value : { type: Mixed },
	timestamp : { type: Date },
	object : { type: Mixed }
});


// Middelware
Event.pre('init', function(next) {
	next();
});

Event.pre('save', function(next) {
	next();
});

Event.pre('remove', function(next) {
	next();
});


// Exports
mongoose.model('Event', Event);
exports.schema = Event;
exports.schema = mongoose.model('Event');