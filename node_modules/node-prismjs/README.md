# node-prismjs

[![npm package](https://img.shields.io/npm/v/node-prismjs.svg?style=flat-square)](https://www.npmjs.org/package/node-prismjs)
[![NPM downloads](http://img.shields.io/npm/dm/node-prismjs.svg?style=flat-square)](https://npmjs.org/package/node-prismjs)
[![Dependency Status](https://david-dm.org/benjycui/node-prismjs.svg?style=flat-square)](https://david-dm.org/benjycui/node-prismjs)

An adapter which make it easier to use [Prism](http://prismjs.com/) in Node.js.

## Usage

Installation:

```bash
npm install --save node-prismjs
```

In Node.js

```js
const Prism = require('node-prismjs');
function highlight(lang, sourceCode) {
  const language = Prism.languages[lang] || Prism.languages.autoit;
  return Prism.highlight(sourceCode, language);
}
```

## License

MIT
