var mongoose = require('mongoose');
var lotSchema = require('./schemas/Lot');

mongoose.connect('mongodb://localhost:27017/test');

// ADDING A LOT 
var Lot = mongoose.model("Lot", lotSchema);

var lot1 = new Lot1({ LotCode: "0000" , Max: 50, Current: 0});

lot1.save(function(err, newLot) {
	if(err) console.error(err);
	else {
		console.log(newLot);
	}
});

// FINDING A LOT

Lot.find(function(err, lots) {
	if(err) console.error();
});

// UPDATING A LOT

