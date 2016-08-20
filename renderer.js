// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {clipboard} = require('electron')
module.exports = function demoClipboard()
{
    var text = clipboard.readText("String");
    alert(text);
}