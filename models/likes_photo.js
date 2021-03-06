var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikesPhoto = new Schema({

    id_photo: String,
    id: String,
    full_name: String,
    profile_picture: String,
    username: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }

});

module.exports = mongoose.model('LikesPhoto', LikesPhoto);
