var mongoose = require('mongoose');
var transactionSchema = require('./schemas/Transaction');
var userSchema = require('./schemas/User');

// ADDING
mongoose.connect('mongodb://localhost:27017/test');

var User = mongoose.model('User',userSchema);

var toAddUser = new User(
							{Profile : 
								{
									Email: "Chris.McDonald12@outlook.com", 
									FullName: "Chris McDonald",
									Car: {
										Color: "Blue",
										Make: "Honda",
										Plate: "NODE-ADD"
									}
								},
								Transactions : []
							}
						);

toAddUser.save(function(err, newUser) {
	if (err) return console.error(err);
	else console.log("ADDED");
});

// FINDING
User.find({ Profile : { Email: "", FullName: "", Car: { Color: "", Make : "", Plate: ""}}}, function(err, person) {
	if(err) {
		// error
	} else {
		// check if found one/none, or multiple???
	}
});

// DELETING
User.remove({ Profile : { Email: "", FullName: "", Car: { Color: "", Make : "", Plate: ""}}}, function(err) {
	if(err) { 
		// not removed
	}
	else {
		// removed
	}
});

//	UPDATING

User.findOneAndUpdate( {Profile: {Email: "Chris"}}, {Profile: {FullName : "Apple"}}, function(err, userChanged) {
	if(err) {
		// not changes
	} else {
		// changed
	}
});
