'use strict';
var SpriteManager = SpriteManager || {};


goog.provide('Blockly.Blocks.room');

goog.require('Blockly.Blocks');

Blockly.Blocks.room.HUE = 180;

Blockly.Blocks['room'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dans")
        .appendField(new Blockly.FieldDropdown(SpriteManager.getDisplayNameArray(SpriteManager.getRoomSubTree())), "ROOMS");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
