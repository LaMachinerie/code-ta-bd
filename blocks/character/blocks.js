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
    let id = this.id;
    let surround = this.getSurroundParent()
    if(surround != undefined && surround.type != "room") 
      surround = undefined;

    var selectedBlock = undefined;
    if(Blockly.selected != undefined)
      selectedBlock = Blockly.selected;

    switch(event.type){
      case Blockly.Events.MOVE:
        if(surround != undefined){
          let currentRoom = surround.getFieldValue("ROOMS");
          if(currentRoom != this.lastRoom){
            this.lastRoom = currentRoom;
            this.setRoom(currentRoom);
            this.lastCharacter = this.getFieldValue("CHAR");
            this.lastAction = this.getFieldValue("ACTIONS");
          }else{
            this.setDropdown(this.lastRoom, this.lastCharacter, this.lastAction);
          }
        }else{
          this.resetBlock();
        }
        break;
      case Blockly.Events.CHANGE:
        if(surround != undefined && selectedBlock == this){
          let currentRoom = surround.getFieldValue("ROOMS");
          if(event.name == "CHAR"){
            let currentCharacter = this.getFieldValue("CHAR");
            if(currentCharacter != this.lastCharacter){
              this.setCharacter(currentRoom, currentCharacter);
            }
          }else if(event.name == "ACTIONS"){

          }
        }
        break;
      case Blockly.Events.CREATE:

        break;
      case Blockly.Events.DELETE:

        break;
    }
  },
  isDynamic: true,
  lastRoom: "default",
  lastCharacter: "default",
  lastAction: "default",
  setRoom: function (room){
    var CharacterDropdown = this.getField("CHAR")
    CharacterDropdown.menuGenerator_ = SpriteManager.getDisplayNameArray(SpriteManager.getCharacterSubTree(room),[["Quelqu'un", "default"]]);
    CharacterDropdown.setText(CharacterDropdown.menuGenerator_[0][0]);
    CharacterDropdown.setValue(CharacterDropdown.menuGenerator_[0][1]);
  
    var char = this.getFieldValue("CHAR");
    var actionsDropdown = this.getField('ACTIONS');
    actionsDropdown.menuGenerator_ = SpriteManager.getDisplayNameArray(SpriteManager.getActionsSubTree(room, char), [["fait quelque chose", "default"]]);
    actionsDropdown.setText(actionsDropdown.menuGenerator_[0][0]);
    actionsDropdown.setValue(actionsDropdown.menuGenerator_[0][1]);
  },
  setCharacter: function (room, char){
    var char = this.getFieldValue("CHAR");
    var actionsDropdown = this.getField('ACTIONS');
    actionsDropdown.menuGenerator_ = SpriteManager.getDisplayNameArray(SpriteManager.getActionsSubTree(room, char), [["fait quelque chose", "default"]]);
    actionsDropdown.setText(actionsDropdown.menuGenerator_[0][0]);
    actionsDropdown.setValue(actionsDropdown.menuGenerator_[0][1]);
  },
  setDropdown: function (room, char, action){
    this.setRoom(room);
    let characterDropdown = this.getField("CHAR");
    let actionsDropdown = this.getField('ACTIONS');
    characterDropdown.setValue(char);
    actionsDropdown.setValue(action);
    characterDropdown.setText(getDisplayName(characterDropdown.menuGenerator_, char));
    actionsDropdown.setText(getDisplayName(actionsDropdown.menuGenerator_, action));
  },
  resetBlock: function (){
    var CharacterDropdown = this.getField("CHAR")
    CharacterDropdown.menuGenerator_ = [["Quelqu'un", "default"]];
    CharacterDropdown.setText(CharacterDropdown.menuGenerator_[0][0]);
    CharacterDropdown.setValue(CharacterDropdown.menuGenerator_[0][1]);
  
    var actionsDropdown = this.getField('ACTIONS');
    actionsDropdown.menuGenerator_ = [["fait quelque chose", "default"]];
    actionsDropdown.setText(actionsDropdown.menuGenerator_[0][0]);
    actionsDropdown.setValue(actionsDropdown.menuGenerator_[0][1]);
  }
};




function getDisplayName(array, key){
  for(let i in array){
    if(array[i][1] == key){
      return array[i][0];
    }
  }
  return array[0][1];
}