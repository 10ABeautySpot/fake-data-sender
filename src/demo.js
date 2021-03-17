const {send} = require("./sender/receive-data-sender");
const {receiveDataSchema} = require("./schema/receive-data");
const schedule = require('node-schedule');
const {dataType} = require("./config/data-type");
const {devicesIds} = require("./config/devices");


const jobProcess = (dataType) => {
    devicesIds.forEach(devicesId => {
        send({
            url: "127.0.0.1:3000/data-receiver/api/dataReceiver/monitorData/receive",
            schema: receiveDataSchema,
            times: 1,
            appendData: {devicesId, dataType}
        });
    })
}

const FiveMinJob = schedule.scheduleJob('0 0,5,10,15,20,25,30,35,40,45,50,55 * * * ?', function () {
    jobProcess(dataType.MIN);
});

const HourJob = schedule.scheduleJob('0 0 * * * ?', function () {
    jobProcess(dataType.HOUR);
});

const DayJob = schedule.scheduleJob('0 0 0 * * ?', function () {
    jobProcess(dataType.DAY);
});


/*
手动执行使用
jobProcess(dataType.MIN);
jobProcess(dataType.HOUR);
jobProcess(dataType.DAY);
 */
