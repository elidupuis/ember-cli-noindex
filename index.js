/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-noindex',

  /**
   * Add `<meta name="robots" content="noindex, nofollow">` to <head>
   * unless the addon has been disabled in the current environment.
   */
  contentFor: function(type, config) {
    var enabled = true;

    // allow users to opt-out
    if (config.noindex && config.noindex.enabled === false) {
      enabled = false;
    }

    if (type === 'head' && enabled) {
      return '<meta name="robots" content="noindex, nofollow">';
    }
  }
};
