/**
 * Created by jian.liang on 14-5-6.
 */

var uuid = require("uuid");

module.exports = Player;


function Player(name){
    this.name = name;
    this.id = uuid.v1();
    this.maxatk = Math.floor(Math.random() * 50);
    this.minatk = 50 + this.maxatk;
    this.hp = 500;
    this.lv = 0;

}

/**
 *
 */
Player.prototype.attack = function(obj){


}