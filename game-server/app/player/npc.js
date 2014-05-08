/**
 * Created by jian.liang on 14-5-7.
 */


module.exports = NPC
var NPC = function(name){

    function getAtk(lv){

    }
    this.name = name;
    this.id;
    this.minAtk = 10;
    this.maxAtk = 20;
    this.lv = 0;
    this.hp = 100;
    this.exp = 5;

    this.setLv = function (lv){
        this.lv = lv;
    }
    /**
     *  获取伤害值
     * @returns {*}
     */
    this.getDamageVal = function(){
        return random(this.minAtk, this.maxAtk);
    }
}

function random(start, end){
    return start + Math.floor( Math.random() * (end - start));
}

var npc = NPC.prototype;




