const {clipboard} = require('electron')
var q = require('q')
var o = require('odata')


module.exports = function ()
{
    var text = clipboard.readText("String");
    var deferred = q.defer();

    o('http://hackclientanswer.azurewebsites.net/Answers').get(function(data){
        var index = Math.floor((Math.random() * data.length))
        deferred.resolve(data[index].Value)
    });
    return deferred.promise;
}