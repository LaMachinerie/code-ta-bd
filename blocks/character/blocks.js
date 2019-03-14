'use strict';
var SpriteManager = SpriteManager || {};
var BotlyStudio = BotlyStudio || {};

goog.provide('Blockly.Blocks.character');

goog.require('Blockly.Blocks');

Blockly.Blocks.character.HUE = 180;

Blockly.Blocks['character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Afficher")
        .appendField(new Blockly.FieldDropdown([["Quelqu'un", "default"]]), "CHAR")
        .appendField("qui")
        .appendField(new Blockly.FieldDropdown([["fait quelque chose", "default"]]), "ACTIONS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  onchange: function(event) {
    var surround = this.getSurroundParent()
    if(surround.type != "room") 
      surround = undefined;

    //var selectedBlock = undefined;
    //if(Blockly.selected != undefined)
    //  selectedBlock = Blockly.selected;

    if(surround != undefined){
      var currentRoom = surround.getFieldValue("ROOMS");
      if(currentRoom != lastRoom){
        lastRoom = currentRoom;
        setRoom(currentRoom, this);
      }
    }else{
      resetBlock();
    }

  },
  isDynamic: true,
  lastRoom: "default",
  lastCharacter: "default",
  lastAction: "default"
};



function setRoom(room, block){
  var CharacterDropdown = block.getField("CHAR")
  CharacterDropdown.menuGenerator_ = SpriteManager.getDisplayNameArray(SpriteManager.getCharacterSubTree(room),[["Quelqu'un", "default"]]);
  CharacterDropdown.setText(CharacterDropdown.menuGenerator_[0][0]);
  CharacterDropdown.setValue(CharacterDropdown.menuGenerator_[0][1]);

  var char = block.getFieldValue("CHAR");
  var actionsDropdown = block.getField('ACTIONS');
  actionsDropdown.menuGenerator_ = SpriteManager.getDisplayNameArray(SpriteManager.getActionsSubTree(room, char), [["fait quelque chose", "default"]]);
  actionsDropdown.setText(actionsDropdown.menuGenerator_[0][0]);
  actionsDropdown.setValue(actionsDropdown.menuGenerator_[0][1]);
}

function changeDropdown(room, block){
  var char = block.getFieldValue("CHAR");
  var actionsDrop = block.getField('ACTIONS');
  actionsDrop.menuGenerator_ = SpriteManager.getDisplayNameArray(SpriteManager.getActionsSubTree(room, char), [["fait quelque chose", "default"]]);
  actionsDrop.setText(actionsDrop.menuGenerator_[0][0]);
  actionsDrop.setValue(actionsDrop.menuGenerator_[0][1]);
}

function resetBlock(block){
  var CharacterDropdown = block.getField("CHAR")
  CharacterDropdown.menuGenerator_ = [["Quelqu'un", "default"]];
  CharacterDropdown.setText(CharacterDropdown.menuGenerator_[0][0]);
  CharacterDropdown.setValue(CharacterDropdown.menuGenerator_[0][1]);

  var actionsDropdown = block.getField('ACTIONS');
  actionsDropdown.menuGenerator_ = [["fait quelque chose", "default"]];
  actionsDropdown.setText(actionsDropdown.menuGenerator_[0][0]);
  actionsDropdown.setValue(actionsDropdown.menuGenerator_[0][1]);
}
