var jsf = require('json-schema-faker');
const {post} = require("../apis/tianyan");
const {receiveDataSchema} = require("../schema/receive-data");


const send = ({url, schema = receiveDataSchema, times = 1000}) => {
    for (let i = 0; i < times; i++) {
        let sample = jsf.generate(schema);
        post(url, sample)
    }
}

module.exports = {send}
