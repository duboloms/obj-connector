# Object Connector

Object Connector is a package utility for advanced joining (or merging) objects.

## Installation
Npm
`npm install obj-connector`

NodeJS Require:
```javascript 
const ObjConnector = require('obj-connector');
```

## Easy Example
We have base configuration template and new config, which needs base template:
```javascript
const baseConfig = {
  plugins: [ "sass", "postcss" ]
}

const newConfig = // ???
```
You can write something this:
```javascript
const baseConfig = {
  plugins: [ "sass", "postcss" ]
}

const newConfig = {
  entry: './src/app.js',
  plugins: [ "sass", "postcss" ]
}
```
This is the normal way, but if you have more configurations, it will be difficult to continue doing this:
```javascript
const baseConfig = {
  plugins: [ "sass", "postcss" ]
}

const config1 = {
  entry: './src/app.js',
  plugins: [ "sass", "postcss" ]
}
const config2 = {
  entry: './src/app2.js',
  plugins: [ "sass", "postcss" ]
}
const config3 = {
  entry: './src/another.js',
  plugins: [ "sass", "postcss" ]
}
const config4 = {
  entry: './src/balba.js',
  plugins: [ "sass", "postcss" ]
}
const config5 = {
  entry: './src/23.js',
  plugins: [ "sass", "postcss" ]
}
const config6 = {
  entry: './src/fef.js',
  plugins: [ "sass", "postcss" ]
}
const config7 = {
  entry: './src/osos.js',
  plugins: [ "sass", "postcss" ]
}
const config8 = {
  entry: './src/blya.js',
  plugins: [ "sass", "postcss" ]
}
const config9 = {
  entry: './src/uuuh.js',
  plugins: [ "sass", "postcss" ]
}
const config10 = {
  entry: './src/ohmygod.js',
  plugins: [ "sass", "postcss" ]
}
```
And obviously, if you need to change the baseConfig, you will also need to change it in other configurations(

And this problem just solves Object Connector:
```javascript
const ObjConnector = require('obj-connector');

const connector = new ObjConnector();

const baseConfig = {
  plugins: [ "sass", "postcss" ]
}

const newConfig = connector.connect(baseConfig, {
  entry: './src/app.js'
});

console.log(newConfig); // { entry: './src/app.js', plugins: [ "sass", "postcss" ] }

// change baseConfig
baseConfig.plugins.push("minifier");

// and check newConfig
console.log(newConfig); // { entry: './src/app.js', plugins: [ "sass", "postcss", "minifier" ] }
```
bingo

## API

### ObjConnector [class]
#### connect(obj1, obj2)
return two connected objects:
```javascript
const object1 = {
  plugins: [ "sass", "postcss" ]
}

const ObjConnector = require('obj-connector');

const connector = new ObjConnector();

const object1 = {
  plugins: [ "sass", "postcss" ]
}

const object2 = { entry: './src/app.js' };


const connected = connector.connect(object1, object2);

// log connected object
console.log(connected); // { entry: './src/app.js', plugins: [ "sass", "postcss" ] }
```
