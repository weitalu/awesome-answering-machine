const _ = require('lodash');

var ModalService = function(selector) {
	this.$modal = $(selector);
};

ModalService.prototype = _.assignIn(ModalService.prototype, {
  show: function(content) {
    if (_.isString(content)) {
      this.$modal.find('.modal-body').text(content);
    }

    if (_.isObject(content)) {
      this.$modal.find('.modal-title').text(content.title);
      this.$modal.find('.modal-body').text(content.body);
    }

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