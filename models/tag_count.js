var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagCount = new Schema({
    name: String,
    photo_id: [String],
    popularity: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TagCount', TagCount);
