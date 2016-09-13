var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	Code: {type: String, required: true, uppercase: true}, // Meter or Lot CODE
	Type: {type: String, required: true}, // Can be 'Meter' or 'Lot'
	Price: {type: Number, required: true},
	Date: {type: Date, required: true}
});