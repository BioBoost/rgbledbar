const Tlc59116 = require('tlc59116');
const i2c = require('i2c-bus');

class RGBLedBar {

  constructor(i2c) {
    this.tlc59116 = new Tlc59116(i2c);
  }

}

module.exports = RGBLedBar;