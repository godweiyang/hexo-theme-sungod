var path = require('path');

module.exports = function(resolve){
  return function(_path){
    try{
      return resolve(_path);
    }
    catch(e){
      var dirs = _path.split('/');

      var pkg = dirs.map(function(dir, index){
          return {
            module: dirs.slice(0, index + 1).join('/'),
            file: dirs.slice(index + 1).join('/')
          };
        })
        .map(function(dir){
          try{
            return {
              module: resolve(dir.module + '/package.json'),
              file: dir.file
            };
          }
          catch(e){
            return undefined;
          }
        })
        .filter(function(dir){
          return !!dir;
        })[0];

      if(!pkg){
        throw e;
      }

      return path.resolve(path.dirname(pkg.module), pkg.file);
    }
  };
};
