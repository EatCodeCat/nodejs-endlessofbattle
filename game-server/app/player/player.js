/**
 * Created by jian.liang on 14-5-6.
 */

module.exports = Player;


function Player(name){
    this.name = name;
    this.id = 0
    this.atk = 50;
    this.hp = 500;
    this.lv = 0;
    this.exp = 50;
    this.currentExp = 0;
}

var player = Player.prototype;

/**
 *
 */
player.attack = function(obj){


}

/**
 *
 */
player.lvUp = function(){
    this.atk = this.atk *0.1 + 5;
    this.hp = this.hp * 0.1 + 20;
    this.lv++;
    this.exp *= 1.5;
}

player.getPlayerInfo = function(){
    return {username:this.name, lv: this.lv, hp:this.hp, exp:this.exp, currentExp:this.currentExp, atk:this.atk, id : this.id};
}