const {clipboard} = require('electron')
var q = require('q')
var o = require('odata')

var index = 0

module.exports = function ()
{
    var text = clipboard.readText("String");
    var deferred = q.defer();

    o('http://hackclientanswer.azurewebsites.net/Answers').get(function(data){
        if (index>=data.length) index=0;
        deferred.resolve(data[index].Value)
        index++;
    });
    return deferred.promise;
}