(function() {
  "use strict"

  var addToLat = require('./js/addToLat')
    , batchByKeyValue = require('./js/batchByKeyValue')
  ;

  var argvs = process.argv;

  if(argvs.length > 2) {

    // accept params
    var param1     = argvs[2]
      , inputPath  = argvs[3]
      , param2     = argvs[4]
      , outputPath = argvs[5]
    ;

    switch (param1) {

      case '-i':

        batchByKeyValue(inputPath, outputPath, ',');

        break;

      default:
        addToLat(param1, function(err, location) {

          if(err) {
            console.log(err);
          } else {
            console.log(param1 + ':', location);
          }

        });

    }

  } else {

    console.log('Params are not match');

    process.exit(1);

  }

})();
