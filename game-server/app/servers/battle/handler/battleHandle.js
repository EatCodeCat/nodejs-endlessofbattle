/**
 * Created by jian.liang on 14-5-6.
 */

var battleRemote = require('../remote/battleRemote');
var BattleManger = require("./../../../player/battleManger");

module.exports = function (app) {
    return new Handler(app);
};

var Handler = function (app) {
    this.app = app;
    this.channelService = this.app.get('channelService');

};
var handler = Handler.prototype;

handler.gameStart = function (msg, session, next) {
    var uid = msg.uid;
    var player = BattleManager.PlayerManger.getNewPlayer(uid);
    BattleManager.joinBattle(player);
    next(null, player);

};

handler.updatePlayer = function(msg, session, next){
    var channel = this.channelService.getChannel("battle1", false);
    if(!! channel){
        var player = BattleManger.PlayerManger.getPlayer(uid);
        var param ={
            route:"UpdatePlayer",
            player:player
        }
        channel.pushMessageByUids(uid, param);
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
