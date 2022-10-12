const uiConfigDefault = require('config/uiConfig.js');

function Base() {
  this.uiConfig = uiConfigDefault;
}
module.exports = new Base();