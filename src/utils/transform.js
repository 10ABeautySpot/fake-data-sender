const dayjs = require("dayjs");
var jsf = require('json-schema-faker');
const {generatePollSchema} = require("../schema/pollute-enum");
const codeList = ["no2", "co", "pm10", "pm2p5", "o3", "so2"];

const toMinDateString = function (date) {
    return dayjs(date).format('YYYY-MM-DD HH:mm:00');
}

const toHourDateString = function (date) {
    return dayjs(date).format('YYYY-MM-DD HH:00:00');}

const toDayDateString = function (date) {
    return dayjs(date).format('YYYY-MM-DD 00:00:00');
}

const dateMethods=[toMinDateString,toHourDateString,toDayDateString]


const adjustSourceData = (data,{devicesId,dateType}) => {
    const recordDataTime=dateMethods[dateType](new Date());
    data.items.forEach((item,index) => {
        let code = codeList[index];
        item.value= jsf.generate(generatePollSchema(code)).value;
        item.code =code;
        item.dateTime=recordDataTime;
    })
    data.dateTime=recordDataTime;
    data.dateType=dateType;
    data.monitorEquipmentNumber=devicesId;

}

module.exports = {adjustSourceData}
