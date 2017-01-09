var mongoose = require('mongoose');

module.exports = mongoose.model('user', {
	id: 			String,
	name: 			String,
	displayName: 	String,
	firstName: 		String,
	lastName: 		String,
	email: 			String,
	image: 			String //imgage: { data: Buffer, contentType: String },
	//image: { data: Buffer, contentType: String }

});

