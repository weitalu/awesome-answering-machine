// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {clipboard} = require('electron')
var answerAsync = require('./answerService.js')
var fbShareAsync = require('./fbShareService.js')

module.exports = {
        "alertClipboardText" : function (){
                    var text = clipboard.readText("String");
                    alert(text);
                },
        "alertAnswer" : function (){
             answerAsync().then(function(text){
                 alert(text);
             })
        },
        "fbShare":function(){
            fbShareAsync()
        }
}