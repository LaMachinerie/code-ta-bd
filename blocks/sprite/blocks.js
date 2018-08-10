'use strict';
var BotlyStudio = BotlyStudio || {};

BotlyStudio.BlocJSON = {
  "categories": {
    "sprite": {
      "categoryName": "Scene",
      "description": "Affiche la pièce selectionnée",
      "languages": ["fr", "en"],
      "toolboxName": "Scène",
      "toolbox": [
        "  <category>",
        "    <block type=\"infinite_loop\"></block>",
        "  </category>",
      ]
    }
  }
}


goog.provide('Blockly.Blocks.sprite');

goog.require('Blockly.Blocks');

Blockly.Blocks.sprite.HUE = 180;

Blockly.Blocks['room'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Dans")
      .appendField(new Blockly.FieldDropdown([["la cuisine", "VALUE"], ["la chambre", "VALUE"], ["l'entrée", "VALUE"]]), "ROOMS");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour(230);
    this.setTooltip('Affiche la pièce selectionnée');
  }
};