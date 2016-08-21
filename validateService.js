const {clipboard} = require('electron');
const q = require('q');
const _ = require('lodash');

var ValidateService = function(options) {
  this._options = _.assignIn(this._defaultOptions, options ? options : {});
};

ValidateService.prototype = _.assignIn(ValidateService.prototype, {
  _defaultOptions: {
    lengthLimit: 160,
  },
  validate: function() {
    var text = clipboard.readText('String').trim();
    var deferred = q.defer();

    if ( ! text) {
      deferred.reject({type: 'string_empty', message: 'String empty'});
    }

    if (text.length > this._options.lengthLimit) {
      deferred.reject({type: 'string_too_long', message: 'String too long'});
    }

    deferred.resolve({type: 'success', message: 'Success', text: text});

    return deferred.promise;
  },
});

module.exports = ValidateService;
