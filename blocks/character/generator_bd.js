
'use strict';

goog.provide('Blockly.Javascript.character');

goog.require('Blockly.Javascript');

Blockly.JavaScript['character'] = function(block) {
  var dropdown_charaters = block.getFieldValue('CHAR');
  var dropdown_actions = block.getFieldValue('ACTIONS');
  
  var code = '...;\n';
  return code;
};