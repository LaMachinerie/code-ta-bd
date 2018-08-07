'use strict';

goog.provide('Blockly.Blocks.test');

goog.require('Blockly.Blocks');

Blockly.Blocks.test.HUE = 180;

/* Ardublockly logo block */
Blockly.Blocks['ardublockly_name_top'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BLOCKS_TEST_);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.test.HUE);
  }
};
