var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MachineSchema   = new Schema({
    sku : String,
    name: String,
    water_line: Boolean,
    model: String,
    type: String
});

module.exports = mongoose.model('Machine', MachineSchema);
