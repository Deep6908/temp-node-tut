// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const name = require('./4-names')
const sayH = require('./5-utils')
const data = require('./6-alternative-flavor')

console.log(name);
console.log(data);

require('./7-mind-grenade')

sayH('susan')
sayH(name.Person1)
sayH(name.Person2)
