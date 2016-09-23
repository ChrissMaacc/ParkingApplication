// This file's purpose is a "dependancy injector"
// Because alot of files will use the Models / Schemas
// in the Mongoose / MongoDB, this will inject them to
// be used 

var mongoose = require('mongoose'); // Mongoose provides schema validation for MongoDB
var _ = require('underscore'); // Helper Library for JS, includes for each loops and stuff

 