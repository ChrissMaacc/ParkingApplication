var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	MeterCode: {type: String, required: true, uppercase: true},
	Price: {type: Number, required: true},
	date: {type: Date, required: true}
});