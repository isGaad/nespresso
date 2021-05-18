var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PodSchema   = new Schema({
    sku : String,
    name: String,
    type: String,
    size: String,
    flavor: String,
    dozens: Number
});

module.exports = mongoose.model('Pod', PodSchema);
