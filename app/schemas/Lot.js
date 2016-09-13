var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	LotCode: {type: String, required: true, uppercase: true},
	Max: {type: Number, required: true},
	Current: {type: Number, required: true}
});