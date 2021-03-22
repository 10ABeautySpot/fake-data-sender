const {send} = require("./sender/receive-data-sender");
const {receiveDataSchema} = require("./schema/receive-data");
const schedule = require('node-schedule');
const {host,port} = require("./config/env-config");
const {dateType} = require("./config/date-type");
const {devicesIds} = require("./config/devices");


const jobProcess = (dateType) => {
    devicesIds.forEach(devicesId => {
        send({
            url: `http://${host}:${port}/api/dataReceiver/monitorData/receive`,
            schema: receiveDataSchema,
            times: 1,
            appendData: {devicesId, dateType}
        });
    })
}

const PerMinJob = schedule.scheduleJob('0 * * * * ?', function () {
    jobProcess(dateType.MIN);
});

const HourJob = schedule.scheduleJob('0 0 * * * ?', function () {
    jobProcess(dateType.HOUR);
});

const DayJob = schedule.scheduleJob('0 0 0 * * ?', function () {
    jobProcess(dateType.DAY);
});

// jobProcess(dateType.MIN);
// jobProcess(dateType.HOUR);
// jobProcess(dateType.DAY);
