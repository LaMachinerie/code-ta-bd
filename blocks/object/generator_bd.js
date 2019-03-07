
'use strict';

goog.provide('Blockly.Javascript.object');

goog.require('Blockly.Javascript');

Blockly.JavaScript['object'] = function(block) {
    var dropdown_object = block.getFieldValue('OBJ');
    var room = null;
    var isLit = true;
    if (block.previousConnection.isConnected()) {
      var surround = block.getSurroundParent()
      if (surround != null) {
        if (surround.getFieldValue("ROOMS") != null) {
          room = surround.getFieldValue("ROOMS");
          if(room != "bathRoom"){
            isLit = surround.light;
          }
        }
      }
    }

    var code = 'object("' + room + '","' + dropdown_object + '","' + isLit + '");\n';
    return code;
  };