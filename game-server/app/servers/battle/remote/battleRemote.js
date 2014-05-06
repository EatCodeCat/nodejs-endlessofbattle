/**
 * Created by jian.liang on 14-5-6.
 */

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
    var param = {
        route: 'onAdd',
        user: uid
    };
    var users =  this.get(name, flag);
    for(var i = 0; i< users.length; i++){
        if(users[i] == uid){
            return;
        }
    }
    channel.pushMessage(param);
    if( !! channel) {
        channel.add(uid, sid);
    }

    cb(this.get(name, flag));
};

BattleRemote.prototype.get = function(name, flag) {
    var users = [];
    var channel = this.channelService.getChannel(name, flag);
    if( !! channel) {
        users = channel.getMembers();
    }
    return users;
};