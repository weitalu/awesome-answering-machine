const _ = require('lodash');

var RenderContentService = function(selector) {
  this.$inputContent = $(selector);
};

RenderContentService.prototype = _.assignIn(RenderContentService.prototype, {
  render: function(rawText) {
  	var content = this._replaceLineBreak(rawText);
		this._updateHtml(content);
  },
  _replaceLineBreak: function(rawText) {
		return rawText.replace(/(?:\r\n|\r|\n)/g, '<br />');
  },
  _updateHtml: function(content) {
		this.$inputContent.html(content);
  }
});

module.exports = RenderContentService;