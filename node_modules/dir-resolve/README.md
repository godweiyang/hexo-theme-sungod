dir-resolve
===========

[![Build Status](https://travis-ci.org/mwinche/dir-resolve.svg?branch=master)](https://travis-ci.org/mwinche/dir-resolve)

## Purpose

An extension to `require.resolve()`. Traditionally, `require.resolve()` calls
only work if you're working with files, as opposed to directories. For example:

```
node_modules/
  module/
    package.json
    test/
    index.js
```

You could run `require.resolve('module')` or `require.resolve('module/package')`
and it would return paths to the files you expected. However, if you ran
`require.resolve('module/test')` it would throw an exception. Since
`require.resolve()` is designed to be the underlying mechanism upon which
`require()` works, this is good and expected behavior. After all, what does
requiring a directory even mean in node?

That said, I recently have had the desire of being able, to not `require()` the
directories of my dependencies, but to get their locations via
`require.resolve()` at which point this this behavior became a hindrance.

Thus, I have written `dir-resolve`. Meant to be an extension to
`require.resolve()`, `dir-resolve` provides all the functionality of
`require.resolve()` but adds the ability to resolve the directories of your
dependencies as well.

## Installation

`npm install dir-resolve`

## Usage

```javascript
var resolve = require('dir-resolve');

//Assuming the example above is at /path

resolve('module/package'); // -> '/path/node_modules/module/package.json'

resolve('module/test'); // -> '/path/node_modules/module/test'
```

In my testing it is compatible with Windows.

## Development

Clone this repo and run `npm install` to run locally.

To run the tests do `npm test` or `npm test -- --watch`.
