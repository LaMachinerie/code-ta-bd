'use strict';
var SpriteManager = SpriteManager || {};

goog.provide('Blockly.Blocks.room');

goog.require('Blockly.Blocks');

Blockly.Blocks.room.HUE = 180;

Blockly.Blocks['room'] = {
  init: function() {
    this.appendValueInput("LIGHT")
        .appendField("Dans")
        .appendField(new Blockly.FieldDropdown(SpriteManager.getDisplayNameArray(SpriteManager.getRoomSubTree(), [["une pièce","default"]])), "ROOMS")
        .setCheck("String");
    this.appendStatementInput("CODE")
        .setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  isDynamic: true,
  light: "day",
  onchange: function(){
    BotlyStudio.autosave();
  }
};

Blockly.Blocks['light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["allumer", "day"], ["éteindre", "night"]]), "LIGHT")
        .appendField("la lumière dans")
        .appendField(new Blockly.FieldDropdown([["la pièce", "current"]]), "PART");
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  onchange: function(){
    BotlyStudio.autosave();
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
  partDropdown.menuGenerator_ = [["toutes les pièces", "all"],["la salle de bain", "bathroom_light"],["la l'escalier", "stairs_light"]];
  if(block.getFieldValue("PART") == "current"){
    partDropdown.setText(partDropdown.menuGenerator_[0][0]);
    partDropdown.setValue(partDropdown.menuGenerator_[0][1]);
  }
}