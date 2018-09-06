'use strict';

module.exports = {
  name: 'ember-cli-noindex',

  /**
   * Add `<meta name="robots" content="noindex, nofollow">` to <head>.
   * We default to enabled in all environments except production.
   */
  contentFor: function(type, appConfig) {
    let defaultConfig = {
      enabled: appConfig.environment !== 'production'
    };

    let config = Object.assign({}, defaultConfig, appConfig.noindex || {});

    if (config.enabled && type === 'head') {
      return '<meta name="robots" content="noindex, nofollow">';
    }

    return '';
  }
};
