const fetch = require("node-fetch");
const post = async (url, data) => {
    data = JSON.stringify(data);
    await fetch(url, {
        method: 'POST',
        body: data,
        headers:{"content-type":"application/json"}
    }).then(res => {
        return res.json();
    }).catch((err) => {
        console.log("post err", url);
        return false;
    });
}
module.exports = {post}
