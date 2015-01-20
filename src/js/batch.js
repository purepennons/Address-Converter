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

    var convertedLength = success.length
    ;

    // start to convert
    async.mapSeries(unsuccess, function(record, callback) {

      addToLat(record.address, function(err, location) {

        if(err) {

          console.log(record.index + '. ' + record.address + ': ' + 'unsuccess.');
          console.log(err);

          callback(null, record);

        } else {

          console.log(record.index + '. ' + record.address + ': ' + 'success.');
          console.log(location);

          success.push(record.address + ',' + location.lat + ',' + location.lng) ;
          callback(null, false);

        }

      });

    }, function(err, results) {

      // filter records which were not success.
      async.filter(results, function(result, callback) {

        if(result) {
          return true;
        } else {
          return false;
        }

      }, function(unsuccessArrays) {

        console.log(unsuccessArrays);


      });

    });

  };

  /******************************************/
  // run
  this.batch(inputArray, baseArray, totalLength, counter);


};
