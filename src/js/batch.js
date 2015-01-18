module.exports = function(inputArray, baseArray, cb) {

  // require
  var async    = require('async')
    , addToLat = require('./addToLat.js')
  ;

  // initial params
  var totalLength = inputArray.length + baseArray.length
    , counter = 0
  ;

  // main
  this.batch = function(unsuccess, success, totalLength, counter) {

    var unsuccessArray  = []
      , convertedLength = success.length
    ;

    // start to convert
    async.mapLimit(unsuccess, 1, function(address, callback) {

      addToLat(address, function(err, location) {

        if(err) {

          console.log(err);

          unsuccessArray.push(address);
          callback(null, address);

        } else {

          console.log(address + ':', location);

          callback(null, address);

        }

      });

    }, function(err, results) {

    });

  };

  /******************************************/
  // run
  this.batch(inputArray, baseArray, totalLength, counter);


};
