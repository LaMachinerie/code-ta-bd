'use strict';
var SpriteManager = SpriteManager || {};


goog.provide('Blockly.Blocks.room');

goog.require('Blockly.Blocks');

Blockly.Blocks.room.HUE = 180;

Blockly.Blocks['room'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dans")
        .appendField(new Blockly.FieldDropdown(SpriteManager.getDisplayNameArray(SpriteManager.getRoomSubTree(), [["une pièce","default"]])), "ROOMS")
        .appendValueInput("LIGHT");
    this.appendStatementInput("CODE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  isDynamic: true,
  light: "day"
};


Blockly.Blocks['light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["allumer", "day"], ["éteindre", "night"]]), "LIGHT")
        .appendField("la lumière dans")
        .appendField(new Blockly.FieldDropdown([["la pièce", "current"]]), "PART");
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  onchange: function(){
    var surround = this.getSurroundParent();
    if(surround != null){
      if(surround.getFieldValue("ROOMS") != null){
        var room = surround.getFieldValue("ROOMS");
        if(room == "bathroom") bathRoomDropdown(this)
        else defaultDropdown(this);
        return;
      }
    }
  },
  isDynamic: true
};



function defaultDropdown(block){
  var partDropdown = block.getField("PART")
  partDropdown.menuGenerator_ = [["la pièce", "current"]];
  partDropdown.setText(partDropdown.menuGenerator_[0][0]);
  partDropdown.setValue(partDropdown.menuGenerator_[0][1]);
}


function bathRoomDropdown(block){
  var partDropdown = block.getField("PART")
  partDropdown.menuGenerator_ = SpriteManager.getDisplayNameArray( SpriteManager.getBackgroundSubTree("bathroom") ,[["la pièce", "current"]]);
  if(block.getFieldValue("PART") == "current"){
    partDropdown.setText(partDropdown.menuGenerator_[0][0]);
    partDropdown.setValue(partDropdown.menuGenerator_[0][1]);
  }
}