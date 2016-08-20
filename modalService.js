var _ = require('lodash');

var ModalService = function(selector) {
	this.$modal = $(selector);
};

ModalService.prototype = _.assignIn(ModalService.prototype, {
  show: function(content) {
		this.$modal.find('.modal-body').text(content);
		this.$modal.modal('show');
  },
  hide: function() {
  	this.$modal.modal('hide');
  },
  toggle: function() {
  	this.$modal.modal('toggle');
  },
});

module.exports = ModalService;