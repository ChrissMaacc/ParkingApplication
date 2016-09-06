var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	MeterCode: {type: String, required: true, uppercase: true},
	Current: {type: Number, required: true},
	LastDatePaid: {type: Date, required: true}
});