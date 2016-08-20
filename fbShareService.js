const request = require('request');
const q = require('q')
var options = {
  url: 'https://graph.facebook.com/device/share',
  method:'post',
  formData:{
      access_token:'1774976136083820|542b2dcada0e3edde3bf3e7ee5789117',
      href:'https://github.com/weitalu/awesome-answering-machine'
  }
};




module.exports=function(){
    var deferred = q.defer();
    request(options,function (err,response,body){
        deferred.resolve(JSON.parse(body));
    });    
    return deferred.promise;
}