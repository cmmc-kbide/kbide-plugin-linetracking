Blockly.JavaScript["digital_pin_dummy_input"] = function (block) {
    let dropdown_name = block.getFieldValue("IO_PIN");
    let code = `${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["analog_pin_dummy_input"] = function (block) {
    let dropdown_name = block.getFieldValue("PIN");
    let code = `${dropdown_name}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["line_tracking_begin"] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code =
        `
  #EXTINC
  #include "CMMC_LineTracking.h" 
  #END
  
  #VARIABLE
  LINETRACKING ${variable_instance};
  #END
  ${variable_instance}.begin(${value_pin});
  \n
  `;
    return code;
};


Blockly.JavaScript["line_tracking_read_digital"] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readDigitalValue()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["line_tracking_read_analog"] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.readAnalogValue()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_tracking_map_value'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var number_fromlow = block.getFieldValue('fromLow');
    var number_fromhigh = block.getFieldValue('fromHigh');
    var number_tolow = block.getFieldValue('toLow');
    var number_tohigh = block.getFieldValue('toHigh');
    var code = `${variable_instance}.mapValue(${value_name}, ${number_fromlow}, ${number_fromhigh}, ${number_tolow}, ${number_tohigh})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['line_tracking_Level'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.lineDetectLevel()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};