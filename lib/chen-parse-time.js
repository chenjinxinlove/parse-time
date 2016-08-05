/**
 * Created by chen on 2016/8/5.
 */

var ParseTime = function () {

};
ParseTime.prototype ={
    getTimeStamp:function () {
        return Math.floor(+new Date()/1000);
    },
    getTime:function(timestamp,format) {
        var newDate = new Date();
        newDate.setTime(timestamp * 1000);
            var date = {
                "M+": newDate.getMonth() + 1,
                "d+": newDate.getDate(),
                "h+": newDate.getHours(),
                "m+": newDate.getMinutes(),
                "s+": newDate.getSeconds(),
                "q+": Math.floor((newDate.getMonth() + 3) / 3),
                "S+": newDate.getMilliseconds()
            };
            if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (var k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1
                        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            return format;
        }
}

module.exports = new ParseTime();