const RGBLedBar = require('rgbledbar')
const i2c = require('i2c-bus');
const Color = require('color');

const i2c1 = i2c.open(1, (err) => {
  if (err) throw err;
  console.log("Opened i2c bus successfully");

  let ledbar = new RGBLedBar(i2c1);

  ledbar.set_led(0, Color.rgb(100, 0, 0));
  ledbar.set_led(1, Color('#00FF00'));
  ledbar.set_led(2, Color('#0000FF').lighten(0.1));
  
  setTimeout(() => {
    ledbar.all_off();
  }, 1000);

});
