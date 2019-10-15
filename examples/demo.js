const RGBLedBar = require('rgbledbar')
const i2c = require('i2c-bus');

const i2c1 = i2c.open(1, (err) => {
  if (err) throw err;
  console.log("Opened i2c bus successfully");

  let ledbar = new RGBLedBar(i2c1);

  ledbar.set_led(0, {red: 100, green: 0, blue: 0});
  ledbar.set_led(1, {red: 0, green: 100, blue: 0});
  ledbar.set_led(2, {red: 0, green: 0, blue: 100});
  
  setTimeout(() => {
    ledbar.all_off();
  }, 1000);

});