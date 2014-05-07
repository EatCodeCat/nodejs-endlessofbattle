/**
 * Created by jian.liang on 14-5-6.
 */



var pomelo = window.pomelo;

var host = '127.0.0.1';
var port = 3014;


var route = 'gate.gateHandler.gameEntry';

function gameEntry(uid, callback) {
    pomelo.init({
        host: host,
        port: port,
        log: true
    }, function () {
        pomelo.request(route, {
            uid: uid
        }, function (data) {
            pomelo.disconnect();
            if (data.code === 500) {
                showError(LOGIN_ERROR);
                return;
            }
            callback(data);
        });
    });
}
$(function(){
    pomelo.on("onAdd",function(data){
        insertInfo($('.content-center p'), data.user + "加入了战斗！", 'joinInfo')
    });
    $('input[type="button"]').click(function(){
        var uid = $("#name").val();
        if(uid.length > 0){
            gameEntry(uid, function () {
                var data = arguments[0];
                var route = "connector.entryHandler.gameInit"

                if (data.code == 200) {
                    pomelo.init({
                        host: data.host,
                        port: data.port,
                        log: true
                    }, function () {
                        pomelo.request(route, {uid: uid}, function (data) {

                            $("#playername").text(data.player.username);
                            $("#lv").text(data.player.lv);
                            $("#hp").text(data.player.hp);
                            $("#atk").text(data.player.atk);
                            //$("#playername").text(data.name);
                            /*pomelo.request('battle.battleHandle.gameStart', {code: 201}, function (object){
                                console.log(object);

                            });*/
                        });


                    });
                }
            })
        }

    });

})

function infoTemplate(type){

    if(type=== 'battleInfo'){
        return ' <p><span>' + arguments[1]  + '</span>对<span>'+arguments[2] +'</span>造成了<span class="red-strong">' + arguments[3] + '</span>点伤害!</p>'
    }
    else if(type === 'chatInfo'){
        return '<p> <span>xxxx</span>对<span>xxxxx</span>说<span>21</span></p>'
    }
    else {
        return '<p><span class="red-strong">' + arguments[1] + '</span></p>';
    }
}

var i = 0;
function insertInfo(box, msg, type){
    if(box.length > 200){
        box.last().remove();
    }
    $(infoTemplate(type, msg, '232323',  i++)).insertBefore(box.first());
}




