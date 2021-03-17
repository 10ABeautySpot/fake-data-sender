const codeList = ["no2", "co", "pm10", "pm2.5", "o3", "so2"];
const adjustSourceData = (data) => {
    data.items.forEach((item,index) => {
        item.code =codeList[index];
    })
}

module.exports = {adjustSourceData}
