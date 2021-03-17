var jsf = require('json-schema-faker');
const {adjustSourceData} = require("../utils/transform");
const {post} = require("../apis/tianyan");
const {receiveDataSchema} = require("../schema/receive-data");


const send = ({url, schema = receiveDataSchema, times = 1, appendData = {}}) => {
    for (let i = 0; i < times; i++) {
        let sample = jsf.generate(schema);
        adjustSourceData(sample,appendData);
        post(url, sample)
    }
}

module.exports = {send}
