/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
const BroccoliDebug = require('broccoli-debug');

module.exports = EngineAddon.extend({
  name: 'engine-map',

  lazyLoading: Object.freeze({
    enabled: false
  }),

  isDevelopingAddon() {
    return true;
  },

  treeForAddon() {
    let tree = this._super.treeForAddon.apply(this, arguments);
    tree = new BroccoliDebug(tree, `ember-engines:${this.name}:for-engine-addon`);
    return tree;
  },

  treeForTemplates() {
    let tree = this._super.treeForTemplates.apply(this, arguments);
    if (tree) {
      tree = new BroccoliDebug(tree, `ember-engines:${this.name}:for-engine-templates`);
    }
    return tree;
  }
});
