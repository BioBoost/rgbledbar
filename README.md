# Touch Key

NodeJS RGB LED Bar lib for the TLC59116.

Allows one to attach RGB LED's to the TLC.

## Dependencies

This library makes use of:

* [tlc59116](https://www.npmjs.com/package/tlc59116) a driver library to interact with the tlc59116
* [i2c-bus](https://www.npmjs.com/package/i2c-bus) to communicate with i2c devices

## Example

The i2c object needs to be injected via the constructor.

A basic example:

```js
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
```

`RGBLedBar`is also compatible with [color](https://www.npmjs.com/package/color).

For example:

```js
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
```
