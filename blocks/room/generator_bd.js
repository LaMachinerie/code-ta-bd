
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
  var surround = undefined;
  if (block.previousConnection.isConnected()) {
    surround = block.getSurroundParent()
    if (surround != null) {
      if (surround.getFieldValue("ROOMS") != null) {
        room = surround.getFieldValue("ROOMS");
      }
    }
  }

  var dropdown_light = block.getFieldValue('LIGHT');
  var dropdown_part = block.getFieldValue('PART');
  var code = "";


  if(surround != undefined){
    if(room != "bathroom"){
        surround.light = dropdown_light;
        code = 'room("' + room + '", "' + surround.light + '");\n'
      
    }
    else{
      let state = true;
      if(dropdown_light == "day") state = true;
      if(dropdown_light == "night") state = false;

      if (dropdown_part == "bathroom_light") SpriteManager.bathroomLight.bathroom = state;
      if (dropdown_part == "stairs_light") SpriteManager.bathroomLight.stairs = state;

      if(SpriteManager.bathroomLight.bathroom && SpriteManager.bathroomLight.stairs)
        code = 'room("' + room + '", "full_light");\n'
      if(SpriteManager.bathroomLight.bathroom && !SpriteManager.bathroomLight.stairs)
        code = 'room("' + room + '", "bathroom_light");\n'
      if(!SpriteManager.bathroomLight.bathroom && SpriteManager.bathroomLight.stairs)
        code = 'room("' + room + '", "stairs_light");\n'
      if(!SpriteManager.bathroomLight.bathroom && !SpriteManager.bathroomLight.stairs)
        code = 'room("' + room + '", "no_light");\n'
    }
  }

  return code;
};
