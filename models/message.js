var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    firstName: {type: String, required: true},        //passed because the ref: 'User' throws an error and cant execute properly the post request on creating messages
    userId: {type: String, required: true}            //passed because the ref: 'User' throws an error and cant execute properly the post request on creating messages
});

schema.post('remove', function(message) {
    User.findById(message.user, function(err, user) {
        user.messages.pull(message._id);
        user.save();
    });
});

module.exports = mongoose.model('Message', schema);