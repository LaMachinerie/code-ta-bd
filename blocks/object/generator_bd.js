
'use strict';

goog.provide('Blockly.Javascript.object');

goog.require('Blockly.Javascript');

Blockly.JavaScript['object'] = function(block) {
    var dropdown_object = block.getFieldValue('OBJ');
    var room = null;
    if (block.previousConnection.isConnected()) {
      var surround = block.getSurroundParent()
      if (surround != null) {
        if (surround.getFieldValue("ROOMS") != null) {
          room = surround.getFieldValue("ROOMS");
        }
      }
    }

    var code = 'object("' + room + '","' + dropdown_object + '");\n';
    return code;
  };