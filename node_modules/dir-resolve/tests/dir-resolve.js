var test = require('ava');

test('dir-resolve should be a function', function(t){
  var resolve = require('../lib/dir-resolve');

  var actual = typeof resolve;
  var expected = 'function';

  t.is(actual, expected);
});

test('dir-resolve should defer to the resolve function', function(t){
  var resolve = require('../lib/dir-resolve');

  var actual = resolve(function(lib){ return lib })('lib');
  var expected = 'lib';

  t.is(actual, expected);
});

test('dir-resolve should throw not found expections', function(t){
  var resolve = require('../lib/dir-resolve');

  t.throws(function(){
    resolve(function(){ throw 'Not found'; })('lib');
  });
});

test('dir-resolve should attempt to find directories', function(t){
  var resolve = require('../lib/dir-resolve');

  var _resolve = function(path){
    if(path === 'lib'){
      return '/path/to/lib';
    }
    else if(path === 'lib/package.json'){
      return '/path/to/lib/package.json';
    }

    throw 'Not found';
  };

  var actual = resolve(_resolve)('lib/dir');
  var expected = '/path/to/lib/dir';

  t.is(actual, expected);
});

test('dir-resolve should work with scoped modules', function(t){
  var resolve = require('../lib/dir-resolve');

  var _resolve = function(path){
    if(path === '@angular/core'){
      return '/path/to/@angular/core';
    }
    else if(path === '@angular/core/package.json'){
      return '/path/to/@angular/core/package.json';
    }

    throw 'Not found';
  };

  var actual = resolve(_resolve)('@angular/core/dist');
  var expected = '/path/to/@angular/core/dist';

  t.is(actual, expected);
});
