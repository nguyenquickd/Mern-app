const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	url: {
		type: String
	},
	status: {
		type: String,
		enum: ['NEW', 'WORKING', 'CLOSED']
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
})

module.exports = mongoose.model('posts', PostSchema)