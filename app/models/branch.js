var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  constructor: function(attributes, options) {
    this.name = 'branch';
    Backbone.Model.apply(this, arguments);
  },

  initialize: function(attributes, options) {
  }
});
