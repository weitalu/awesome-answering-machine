const {clipboard} = require('electron')
var q = require('q')



module.exports = function ()
{
    var text = clipboard.readText("String");
    var deferred = q.defer();
    setTimeout(function(){
        deferred.resolve("Some");
    },5000)
    return deferred.promise;
}