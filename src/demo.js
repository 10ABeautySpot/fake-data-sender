const {send} = require("./sender/receive-data-sender");
const {receiveDataSchema} = require("./schema/receive-data");


send({
    url: "127.0.0.1:3000/data-receiver/api/dataReceiver/monitorData/receive",
    schema: receiveDataSchema,
    times: 1000
});
