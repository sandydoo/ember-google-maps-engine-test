/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'engine-map',
    environment,

    'ember-google-maps': {
      language: 'en',
      key: process.env.GOOGLE_MAPS_API_KEY
    }
  };

  return ENV;
};
