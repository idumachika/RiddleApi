var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
	answer: String,
	
});

module.exports = mongoose.model('Bear', BearSchema);