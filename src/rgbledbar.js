const Tlc59116 = require('tlc59116');
const i2c = require('i2c-bus');

class RGBLedBar {
  static NUMBER_OF_RGB_LEDS = 5;

  constructor(i2c) {
    this.tlc59116 = new Tlc59116(i2c);
  }

  set_led(index, color) {
    if (index >= 0 && index < RGBLedBar.NUMBER_OF_RGB_LEDS) {
      let baseIndex = 3*(RGBLedBar.NUMBER_OF_RGB_LEDS-index)-1;

      color = this.color_to_data_object(color);

      this.tlc59116.set_led(baseIndex-2, color.red);
      this.tlc59116.set_led(baseIndex-1, color.green);
      this.tlc59116.set_led(baseIndex, color.blue);
    }
  }

  all_off() {
    this.tlc59116.all_off();
  }
  
  //////////////////////
  // Internal methods //
  //////////////////////

  color_to_data_object(color) {
    if ((typeof color.red === 'function')) {
      color = {
        red: this.fix_value_to_byte(color.red()),
        green: this.fix_value_to_byte(color.green()),
        blue: this.fix_value_to_byte(color.blue()),
      }
    }
    return color;
  }

  fix_value_to_byte(byte) {
    return Math.min(255, Math.round(byte));
  }
  
}

module.exports = RGBLedBar;