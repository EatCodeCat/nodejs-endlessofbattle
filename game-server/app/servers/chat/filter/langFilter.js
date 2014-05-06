/**
 * Created by jian.liang on 14-5-5.
 */


module.exports = function(){

    return new Filter();
}

function Filter (){


}

Filter.prototype.before = function (msg, session, next) {
    if (typeof msg.content.indexOf !== "undefined" && msg.content.indexOf('fuck') !== -1) {
        session.__abuse__ = true;
        msg.content = msg.content.replace('fuck', '****');
    }

    next();
};

Filter.prototype.after = function (err, msg, session, resp, next) {
    if (session.__abuse__) {
        var user_info = session.uid.split('*');
        console.log('abuse:' + user_info[0] + " at room " + user_info[1]);
    }
    next(err);
};
