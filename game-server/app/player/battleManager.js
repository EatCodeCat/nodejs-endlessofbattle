/**
 * Created by jian.liang on 14-5-6.
 */


var player  = require('player');

module.exports = function(){
    return new BattleManager();
}

function BattleManager(){

}
BattleManager.prototype.PlayerManger = new (function(){
    var id  = 0 ;
    this.getPlayer = function(name){
        var p = new player();
        p.name = name;
        p.id  = id++;
        return p;
    }
})();