const {send} = require("./sender/receive-data-sender");
const {receiveDataSchema} = require("./schema/receive-data");
const schedule = require('node-schedule');
const {dateType} = require("./config/date-type");
const {devicesIds} = require("./config/devices");


const jobProcess = (dataType) => {
    devicesIds.forEach(devicesId => {
        send({
            url: "http://localhost:9999/api/dataReceiver/monitorData/receive",
            schema: receiveDataSchema,
            times: 1,
            appendData: {devicesId, dataType}
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


/*
手动执行使用
jobProcess(dataType.MIN);
jobProcess(dataType.HOUR);
jobProcess(dataType.DAY);
 */
