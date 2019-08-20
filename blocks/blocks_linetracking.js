// Blockly.Blocks["digital_pin_dummy_input"] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["IO00", "0"],
//                 ["IO02", "2"],
//                 ["IO04", "4"],
//                 ["IO05", "5"],
//                 ["IO12", "12"],
//                 ["IO13", "13"],
//                 ["IO14", "14"]
//             ]), "IO_PIN");
//         this.setOutput(true, "Number");
//         this.setColour(330);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks["analog_pin_dummy_input"] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("Analog pin")
//             .appendField(new Blockly.FieldDropdown([
//                 ["ADC1_CH0  (PIN36)", "36"],
//                 ["ADC1_CH1  (PIN37)", "37"],
//                 ["ADC1_CH2  (PIN38)", "38"],
//                 ["ADC1_CH3  (PIN39)", "39"],
//                 ["ADC1_CH4  (PIN32)", "32"],
//                 ["ADC1_CH5  (PIN33)", "33"],
//                 ["ADC1_CH6  (PIN34)", "34"],
//                 ["ADC1_CH7  (PIN35)", "35"],
//                 ["ADC2_CH0  (PIN04)", "4"],
//                 ["ADC2_CH1  (PIN00)", "0"],
//                 ["ADC2_CH2  (PIN02)", "2"],
//                 ["ADC2_CH3  (PIN15)", "15"],
//                 ["ADC2_CH4  (PIN13)", "13"],
//                 ["ADC2_CH5  (PIN12)", "12"],
//                 ["ADC2_CH6  (PIN14)", "14"],
//                 ["ADC2_CH7  (PIN27)", "27"],
//                 ["ADC2_CH8  (PIN25)", "25"],
//                 ["ADC2_CH9  (IO26)", "26"]
//             ]), "PIN");
//         this.setOutput(true, "Number");
//         this.setColour(330);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

Blockly.Blocks["line_tracking_begin"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("line1", null, ["Plugin.LineTracking"], ["Plugin.LineTracking"]), "instance")
            .appendField("begin pin");
        this.appendValueInput("PIN")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks["line_tracking_read_digital"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("line1", null, ["Plugin.LineTracking"], ["Plugin.LineTracking"]), "instance")
            .appendField("digital value");
        this.setOutput(true, "Number");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks["line_tracking_read_analog"] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("line1", null, ["Plugin.LineTracking"], ["Plugin.LineTracking"]), "instance")
            .appendField("analog value");
        this.setOutput(true, "Number");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['line_tracking_map_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("line1", null, ["Plugin.LineTracking"], ["Plugin.LineTracking"]), "instance")
            .appendField("Map value (");
        this.appendValueInput("VALUE")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(", ")
            .appendField(new Blockly.FieldNumber(0), "fromLow")
            .appendField(", ")
            .appendField(new Blockly.FieldNumber(4095), "fromHigh")
            .appendField(", ")
            .appendField(new Blockly.FieldNumber(0), "toLow")
            .appendField(", ")
            .appendField(new Blockly.FieldNumber(100), "toHigh")
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['line_tracking_Level'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("line1", null, ["Plugin.LineTracking"], ["Plugin.LineTracking"]), "instance")
            .appendField("detection level (0-100)");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};