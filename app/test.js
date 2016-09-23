// Running some DB tests
var mongoose = require('mongoose');
var lotSchema = require('./schemas/Lot'); 
var meterSchema = require('./schemas/Meter');
var transactionSchema = require('./schemas/Transaction');
var userSchema = require('./schemas/User');

mongoose.connect('mongodb://localhost:27017/test');

// TESTING CONNECTION
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });


var User = mongoose.model('User',userSchema);
// var Meter = mongoose.model('Meter',meterSchema);
// var Lot = mongoose.model('Lot',lotSchema);

// var meter1 = new Meter({MeterCode: '00000', Current: 0, LastDatePaid: '2000/01/01'});

// meter1.save(function(err, newMeter) {
// 	if(err) return console.error(err);
// 	else console.log(newMeter);
// });




// process.exit(1);