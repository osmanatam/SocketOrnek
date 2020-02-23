const WebSocket = require('ws');
var btcs = new WebSocket("wss://ws.blockchain.info/inv");


btcs.onopen = function () {
    btcs.send(JSON.stringify({
        "op": "unconfirmed_sub"
    }));


    btcs.onmessage = function (onmsg) {
        console.log(onmsg)
    }
}