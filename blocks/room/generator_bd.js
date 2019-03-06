
'use strict';

goog.provide('Blockly.Javascript.room');

goog.require('Blockly.Javascript');



Blockly.JavaScript['room'] = function (block) {
  var dropdown_rooms = block.getFieldValue('ROOMS');
  var statements_code = Blockly.JavaScript.statementToCode(block, 'CODE');
  var code = 'room("' + dropdown_rooms + '");\n';
  code += statements_code + '\n';
  return code;
};


Blockly.JavaScript['light'] = function (block) {
  var room = null;
  if (block.previousConnection.isConnected()) {
    var surround = block.getSurroundParent()
    if (surround != null) {
      if (surround.getFieldValue("ROOMS") != null) {
        room = surround.getFieldValue("ROOMS");
      }
    }
  }

  var dropdown_light = block.getFieldValue('LIGHT');
  var dropdown_part = block.getFieldValue('PART');
  var code = "";

  if(dropdown_part == "current") 
    code = 'room("' + room + '", "' + dropdown_light + '");\n'
  else{
    let tree = SpriteManager.getBackgroundSubTree("bathroom");
    let id = tree[dropdown_part].id;
    SpriteManager.bathroomLight += (dropdown_light == "day") ? id : -id;
    for(var key in tree){
      if(tree[key].id == SpriteManager.bathroomLight){
        code = 'room("' + room + '", "' + key + '");\n'
      }
    }
  }


  return code;
};
