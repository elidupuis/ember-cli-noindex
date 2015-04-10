/* jshint node: true */
'use strict';

var merge = require('lodash-node/compat/object/merge');

module.exports = {
  name: 'ember-cli-noindex',

  /**
   * Add `<meta name="robots" content="noindex, nofollow">` to <head>.
   * We default to enabled in all environments except production.
   */
  contentFor: function(type, config) {
    var defaultConfig = {
      enabled: config.environment !== 'production'
    };

    var config = merge({}, defaultConfig, config.noindex || {});

    if (config.enabled && type === 'head') {
      return '<meta name="robots" content="noindex, nofollow">';
    }

    return '';
  }
};
