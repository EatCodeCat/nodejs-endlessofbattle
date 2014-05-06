/**
 * Created by jian.liang on 14-5-6.
 */

var battleRemote = require('../remote/battleRemote');

module.exports = function (app) {
    return new Handler(app);
};

var Handler = function (app) {
    this.app = app;
};
var handler = Handler.prototype;

handler.gameStart = function (msg, session, next) {
    if (msg.code == 201) {
        console.log('game start return')
        next(null,{msg:'hello'});
    }
}

function log(msg) {

    var inputStr = '';
    if (typeof msg == 'string') {

        inputStr = msg;
    }
    else if(typeof msg == 'object'){

        inputStr = JSON.stringify(msg);
    }
    console.log(inputStr);
}
