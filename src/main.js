var jsf = require('json-schema-faker');
const {receiveDataSchema} = require("./schema/receive-data");

var sample = jsf.generate(receiveDataSchema);

console.log("sample", sample);
