var mongoose 	= require('mongoose');
var Transaction = require('./Transaction');

module.exports = 
	new mongoose.Schema({
		Profile: {
			Email: {
				type: String,
				required: true,
				lowercase: true
			},
			FullName: {
				type: String,
				required: true
			},
			Car: {
				Color: { type: String, lowercase: true },
				Make: { type: String, lowercase: true},
				Plate: { type: String, lowercase: true}
			}
		},
		Transactions: [Transaction.categorySchema]
	});