const fetch = require("node-fetch");
const post = async (url, data) => {
    await fetch(url, {method: 'POST', body: data}).then(res => {
        console.log("----res",res);
        return res.json();
    }).catch((err) => {
        console.log("post err", url);
        return false;
    });
}
module.exports = {post}
