'use strict';
var SpriteManager = SpriteManager || {};


goog.provide('Blockly.Blocks.object');

goog.require('Blockly.Blocks');

Blockly.Blocks.object.HUE = 180;


Blockly.Blocks['object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Afficher")
        .appendField(new Blockly.FieldDropdown([["un objet", "default"]]), "OBJ")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  },
  onchange: function(event) {
    let surround = this.getSurroundParent();
    if(surround != undefined){
      let roomKey = surround.getFieldValue("ROOMS");
      if(roomKey != undefined){
        var objectDropdown = this.getField("OBJ")
        let buffer = SpriteManager.getDisplayNameArray(SpriteManager.getObjectSubTree(roomKey),[["un objet", "default"]]);
        objectDropdown.menuGenerator_ = SpriteManager.checkTwice(buffer);
        if(this.getFieldValue("OBJ") == "default"){
          objectDropdown.setText(objectDropdown.menuGenerator_[0][0]);
          objectDropdown.setValue(objectDropdown.menuGenerator_[0][1]);
        }
      }
    }
  },
  isDynamic: true
};