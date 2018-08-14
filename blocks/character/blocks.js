'use strict';
var SpriteManager = SpriteManager || {};


goog.provide('Blockly.Blocks.character');

goog.require('Blockly.Blocks');

Blockly.Blocks.character.HUE = 180;

Blockly.Blocks['character'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Afficher")
        .appendField(new Blockly.FieldDropdown([["Maman", "VALUE"], ["Papa", "VALUE"]]), "CHAR")
        .appendField("qui")
        .appendField(new Blockly.FieldDropdown([["descend l'escalier", "VALUE"], ["crie ''A table !''", "VALUE"]]), "ACTIONS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};