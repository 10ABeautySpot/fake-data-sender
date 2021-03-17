const ids=Array.from({length: 1000}, (x,i) => (10001+i)+"");
console.log("ids",ids,ids[999]);
const devicesIds=ids;
module.exports={devicesIds}
