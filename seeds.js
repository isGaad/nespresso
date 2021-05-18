var mongoose    = require('mongoose');
mongoose.connect("mongodb://localhost:27017/nespresso", { useNewUrlParser: true, useUnifiedTopology: true });

var pods = [
    { sku: 'CP001', name : 'Small coffee Pod', flavor: 'vanilla', dozens : 1 },
    { sku: 'CP003', name : 'Small coffee Pod', flavor: 'vanilla', dozens : 3 },
    { sku: 'CP011', name : 'Small coffee Pod', flavor: 'caramel', dozens : 1 },
    { sku: 'CP013', name : 'Small coffee Pod', flavor: 'caramel', dozens : 3 },
    { sku: 'CP021', name : 'Small coffee Pod', flavor: 'psl', dozens : 1 },
    { sku: 'CP023', name : 'Small coffee Pod', flavor: 'psl', dozens : 3 },
    { sku: 'CP031', name : 'Small coffee Pod', flavor: 'mocha', dozens : 1 },
    { sku: 'CP033', name : 'Small coffee Pod', flavor: 'mocha', dozens : 3 },
    { sku: 'CP041', name : 'Small coffee Pod', flavor: 'hazelnut', dozens : 1 },
    { sku: 'CP043', name : 'Small coffee Pod', flavor: 'hazelnut', dozens : 3 },
    { sku: 'CP101', name : 'Large coffee Pod', flavor: 'vanilla', dozens : 1 },
    { sku: 'CP103', name : 'Large coffee Pod', flavor: 'vanilla', dozens : 3 },
    { sku: 'CP111', name : 'Large coffee Pod', flavor: 'caramel', dozens : 1 },
    { sku: 'CP113', name : 'Large coffee Pod', flavor: 'caramel', dozens : 3 },
    { sku: 'CP121', name : 'Large coffee Pod', flavor: 'psl', dozens : 1 },
    { sku: 'CP123', name : 'Large coffee Pod', flavor: 'psl', dozens : 3 },
    { sku: 'CP131', name : 'Large coffee Pod', flavor: 'mocha', dozens : 1 },
    { sku: 'CP133', name : 'Large coffee Pod', flavor: 'mocha', dozens : 3 },
    { sku: 'CP141', name : 'Large coffee Pod', flavor: 'hazelnut', dozens : 1 },
    { sku: 'CP143', name : 'Large coffee Pod', flavor: 'hazelnut', dozens : 3 },
    { sku: 'EP003', name : 'Espresso Pod', flavor: 'vanilla', dozens : 3 },
    { sku: 'EP005', name : 'Espresso Pod', flavor: 'vanilla', dozens : 5 },
    { sku: 'EP007', name : 'Espresso Pod', flavor: 'vanilla', dozens : 7 },
    { sku: 'EP013', name : 'Espresso Pod', flavor: 'caramel', dozens : 3 },
    { sku: 'EP015', name : 'Espresso Pod', flavor: 'caramel', dozens : 5 },
    { sku: 'EP017', name : 'Espresso Pod', flavor: 'caramel', dozens : 7 },
];

var machines = [
    { sku: 'CM001', name : 'Small Machine', model : 'base', water_line : false},
    { sku: 'CM002', name : 'Small Machine', model : 'premium', water_line : false},
    { sku: 'CM003', name : 'Small Machine', model : 'deluxe', water_line : true},
    { sku: 'CM101', name : 'Large Machine', model : 'base', water_line : false},
    { sku: 'CM102', name : 'Large Machine', model : 'premium', water_line : true},
    { sku: 'CM103', name : 'Large Machine', model : 'deluxe', water_line : true},
    { sku: 'EM001', name : 'Espresso Machine', model : 'base', water_line : false},
    { sku: 'EM002', name : 'Espresso Machine', model : 'premium', water_line : false},
    { sku: 'EM003', name : 'Espresso Machine', model : 'deluxe', water_line : true},
];

var connection = mongoose.connection;
console.log('Seeding Pods..');
connection.collection('pods').insertMany(pods)
console.log('Seeding Machines..');
connection.collection('machines').insertMany(machines);
console.log('Done..');

