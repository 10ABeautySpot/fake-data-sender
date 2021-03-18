const fetch = require("node-fetch");
const post = async (url, data) => {
    console.log("data",data);
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{"content-type":"application/json"}
    }).then(res => {
        console.log("----res",res);
        return res.json();
    }).catch((err) => {
        console.log("post err", url);
        return false;
    });
}
module.exports = {post}
