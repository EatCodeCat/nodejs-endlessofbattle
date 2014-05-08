/**
 * Created by jian.liang on 14-5-6.
 */


var player  = require('./player');

module.exports = new BattleManager();

function BattleManager(){
    this.players = [];

    this.NPCs = [];
}
var _super_ = BattleManager.prototype;
BattleManager.prototype.PlayerManger = new (function(){
    var id  = 0 ;
    this.getNewPlayer = function(name){
        var p = new player();
        p.name = name;
        p.id  = id++;
        return p;
    }

    this.getPlayer = function(uid){
        for(var i = 0;i < _super_.players.length; i++){
            if(_super_.players[i].name == uid){
                return _super_.players[i];
            }
        }
    }
})();

_super_.joinBattle = function(player){
    this.players.push(player);

}

_super_.round = function (){


}

