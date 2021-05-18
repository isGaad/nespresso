var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MachineSchema   = new Schema({
    sku : String,
    name: String,
    water_line: Boolean,
    model: Number,
    type: Number
});

module.exports = mongoose.model('Machine', MachineSchema);
