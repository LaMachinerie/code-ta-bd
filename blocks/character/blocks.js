'use strict';
var SpriteManager = SpriteManager || {};


goog.provide('Blockly.Blocks.character');

goog.require('Blockly.Blocks');

Blockly.Blocks.character.HUE = 180;

Blockly.Blocks['character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Afficher")
        .appendField(new Blockly.FieldDropdown(SpriteManager.getDisplayNameArray(SpriteManager.getCharacterSubTree())), "CHAR")
        .appendField("qui")
        .appendField(new Blockly.FieldDropdown([["crie ''A table !''", "calling"]]), "ACTIONS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  onchange: function(event) {
    if(this.previousConnection.isConnected()){
      var surround = this.getSurroundParent()
      if(surround != null){
        if(surround.getFieldValue("ROOMS") != null){
          var room = surround.getFieldValue("ROOMS");
          var drop = this.getField("CHAR")
          drop.menuGenerator_ = SpriteManager.getDisplayNameArray(SpriteManager.getCharacterSubTree(room));
          drop.setText(drop.menuGenerator_[0][0]);
          drop.setValue(drop.menuGenerator_[0][1]);
        }
      }
    }
  }
};