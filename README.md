simple-json-set-get
=================

A simple persistent user settings framework for just about anything.

This is an adapted version of npm package electron-settings. It's still the same but now the config is stored at `path/to/process/data/config.json` and some other tiny changes so that it works with anything and not just Electron.

In fact I don't know if it works with Electron anymore. It will remain untested since I don't use Electron. Issues and pull-requests welcome if you care enough about the package.

Demo
----

```js
import { conf } from 'https://deno.land/x/simple_json_set_get@1.0.4/index.js';
 
await conf.set('color', {
  name: 'cerulean',
  code: {
    rgb: [0, 179, 230],
    hex: '#003BE6'
  }
});
 
await conf.get('color.name');
// => "cerulean"
 
await conf.get('color.code.rgb[1]');
// => 179
```

### API Docs
Original API Docs can be found at [electron-settings.js.org](https://electron-settings.js.org/)

### Hardcoded config path
It was not always like this, but our projects didn't need to customize the directory, so... we just hardcoded it.

Now it's always `Deno.cwd() + "/data/config.json"`

If you want to change the config file directory and name, you need to download the code repository and modify it in the original code.

### Development notes

I forked this project from `electron-settings` NPM package ([url](https://www.npmjs.com/package/electron-settings))
I made from it `sharon-settings` for Nodejs ([url](https://www.npmjs.com/package/sharon-storage))
And now I made `simple_json_set_get` for Deno

I maintain the repository for my team's projects. If you want, you can post issues on github, pull requests, whatever.

It's not typed because the original is not typed. Such is the path of least resistance.
