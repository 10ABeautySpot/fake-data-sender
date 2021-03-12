var jsf = require('json-schema-faker');
const {post} = require("../apis/tianyan");
const {receiveDataSchema} = require("../schema/receive-data");

let host = "127.0.0.1:3000";
let times = 1000;
for (let i = 0; i < times; i++) {
    var sample = jsf.generate(receiveDataSchema);
    post(host + "/data-receiver/api/dataReceiver/monitorData/receive", sample)
}
