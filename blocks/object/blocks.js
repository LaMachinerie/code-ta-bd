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
        this.setDisabled(false);
        var objectDropdown = this.getField("OBJ")
        let buffer = SpriteManager.getDisplayNameArray(SpriteManager.getObjectSubTree(roomKey),[["un objet", "default"]]);
        objectDropdown.menuGenerator_ = SpriteManager.checkTwice(buffer);
        if(this.getFieldValue("OBJ") == "default" || this.room != roomKey){
          objectDropdown.setText(objectDropdown.menuGenerator_[0][0]);
          objectDropdown.setValue(objectDropdown.menuGenerator_[0][1]);
          this.room = roomKey;
        }
      }
    }else{
      var objectDropdown = this.getField("OBJ")
      objectDropdown.menuGenerator_ = [["un objet", "default"]];
      objectDropdown.setText(objectDropdown.menuGenerator_[0][0]);
      objectDropdown.setValue(objectDropdown.menuGenerator_[0][1]);
      //if(this.parentElement.localName != 'category')
        this.setDisabled(true);
    }
  },
  isDynamic: true,
  room: ""
};