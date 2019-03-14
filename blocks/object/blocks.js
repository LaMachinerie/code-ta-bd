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
    BotlyStudio.autosave();
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
            this.lastObject = this.getFieldValue("OBJ");
          }else{
            this.setDropdown(this.lastRoom, this.lastObject);
          }
        }else{
          this.resetBlock();
        }
        break;
      case Blockly.Events.CHANGE:
        if(surround != undefined){
          let currentRoom = surround.getFieldValue("ROOMS");
          if(selectedBlock == this){
            if(event.name == "OBJ"){
              let currentObject = this.getFieldValue("OBJ");
              if(currentObject != this.lastObject){
                this.lastObject= currentObject;
              }
            }
          }else{
            if(event.name == "ROOMS"){
              if(currentRoom != this.lastRoom){
                this.lastRoom = currentRoom;
                this.setRoom(currentRoom);
                this.lastObject = this.getFieldValue("OBJ");
              }
            }
          }
        }
        break;
      case Blockly.Events.CREATE:
        if(selectedBlock == this)
          this.resetBlock();
        if(selectedBlock == surround && selectedBlock != undefined)
          this.setRoom(surround.getFieldValue("ROOMS"));
        break;
      case Blockly.Events.DELETE:

        break;
    }
  },
  isDynamic: true,
  lastObject: "default",
  lastRoom: "default",
  room: "",
  resetBlock: function (){
    let objectDropdown = this.getField("OBJ")
    objectDropdown.menuGenerator_ = [["un objet", "default"]];
    objectDropdown.setText(objectDropdown.menuGenerator_[0][0]);
    objectDropdown.setValue(objectDropdown.menuGenerator_[0][1]);
  },
  setRoom: function (room){
    let objectDropdown = this.getField("OBJ")
    let buffer = SpriteManager.getDisplayNameArray(SpriteManager.getObjectSubTree(room), [["un objet", "default"]]);
    objectDropdown.menuGenerator_ = SpriteManager.checkTwice(buffer);
    objectDropdown.setText(objectDropdown.menuGenerator_[0][0]);
    objectDropdown.setValue(objectDropdown.menuGenerator_[0][1]);
  },
  setDropdown: function (room, obj){
    this.setRoom(room);
    let objectDropdown = this.getField("OBJ");
    objectDropdown.setValue(obj);
    objectDropdown.setText(getDisplayName(objectDropdown.menuGenerator_, obj));
  }
};

function getDisplayName(array, key){
  for(let i in array){
    if(array[i][1] == key){
      return array[i][0];
    }
  }
  return array[0][0];
}