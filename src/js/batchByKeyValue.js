module.exports = function(inputPath, outputPath, delimiter) {

  var fs       = require('fs')
    , path     = require('path')
    , readline = require('readline')
    , async    = require('async')
    , batch    = require('./batch.js')
  ;

  // normalize path
  var normalInputPath  = path.normalize(inputPath)
    , normaloutputPath = path.normalize(outputPath)
  ;

  // create a read stream from input file by input path.
  var inputStream = fs.createReadStream(normalInputPath, {
    flag      : 'r',
    encoding  : 'utf8',
    autoClose : true
  });


  var inputQueue = [];

  async.series({
    resdFile: function() {
      // read input file line by line.
      // push each line to inputQueue.
      var rdl = readline.createInterface({
        input    : inputStream,
        output   : process.stdout,
        terminal : false
      });

      rdl.on('line', function(line) {
        var splitArray = line.split(delimiter);
        var record = {
          index: parseInt(splitArray[0]),
          address: splitArray[1]
        };

        console.log(record);

        inputQueue.push(record);

      });
    }
  }, function(err, results) {

  });



  // start to convert
  // batch(inputQueue, [], function(){
  //
  // });

};
