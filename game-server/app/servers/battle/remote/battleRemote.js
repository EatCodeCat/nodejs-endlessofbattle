/**
 * Created by jian.liang on 14-5-6.
 */
BattleManager = require("./../../../player/battleManger");

module.exports = function(app) {
    return new BattleRemote(app);
};

var BattleRemote = function(app) {
    this.app = app;
    this.channelService = app.get('channelService');
};


/**
 *
 * @param uid
 * @param sid
 * @param name
 * @param flag
 * @param cb
 */
BattleRemote.prototype.add = function(uid, sid, name, flag, cb) {
    var channel = this.channelService.getChannel(name, flag);

    var users =  this.get(name, flag);
    for(var i = 0; i< users.length; i++){
        if(users[i] == uid){
            cb({code:500, msg:"用户已经存在"})
            return;
        }
    }
    var param = {
        route: 'onAdd',
        user: uid
    };

    if( !! channel) {
        channel.add(uid, sid);
    }
    channel.pushMessage(param);

    cb({code:200,msg:'初始化完成'});
};

BattleRemote.prototype.get = function(name, flag) {
    var users = [];
    var channel = this.channelService.getChannel(name, flag);
    if( !! channel) {
        users = channel.getMembers();
    }
    return users;
};