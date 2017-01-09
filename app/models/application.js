var mongoose = require('mongoose');


module.exports = mongoose.model('application', {
	name : {type : String, default: ''},
	description : {type : String, default: ''},
	url : {type : String, default: ''},
	img : {type : String, default: ''},
    bgcolour : {type : String, default: ''},
    role : {type : String, default: ''}
});

