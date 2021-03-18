const codeList = ["no2", "co", "pm10", "pm2p5", "o3", "so2"];
const fixPlace = (n) => {
    return n >= 10 ? n : "0" + n;
}

const toMinDateString = function (date) {
    return date.getFullYear() + "-" + fixPlace((date.getMonth() + 1)) + "-" + fixPlace(date.getDate()) + " " + fixPlace(date.getHours()) + ":" + fixPlace(date.getUTCMinutes()) + ":00";
}

const toHourDateString = function (date) {
    return date.getFullYear() + "-" + fixPlace((date.getMonth() + 1)) + "-" + fixPlace(date.getDate()) + " " + fixPlace(date.getHours()) +":00:00";
}

const toDayDateString = function (date) {
    return date.getFullYear() + "-" + fixPlace((date.getMonth() + 1)) + "-" + fixPlace(date.getDate()) + " 00:00:00";
}

const dateMethods=[toMinDateString,toHourDateString,toDayDateString]


const adjustSourceData = (data,{devicesId,dateType}) => {
    const recordDataTime=dateMethods[dateType](new Date());
    data.items.forEach((item,index) => {
        item.code =codeList[index];
        item.dateTime=recordDataTime;
    })
    data.dateTime=recordDataTime;
    data.dateType=dateType;
    data.monitorEquipmentNumber=devicesId;

}

module.exports = {adjustSourceData}
