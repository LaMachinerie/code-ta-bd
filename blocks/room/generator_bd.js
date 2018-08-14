
'use strict';

goog.provide('Blockly.Javascript.room');

goog.require('Blockly.Javascript');


Blockly.JavaScript['room'] = function(block) {
  var dropdown_rooms = block.getFieldValue('ROOMS');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

  var code = '...;\n';
  return code;
};