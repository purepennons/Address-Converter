module.exports = function(inputPath, outputPath, delimiter) {

  var fs       = require('fs')
    , path     = require('path')
    , readline = require('readline')
    , async    = require('async')
    , addToLat = require('./addToLat.js')
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

  // read input file line by line.
  var rdl = readline.createInterface({
    input    : inputStream,
    output   : process.stdout,
    terminal : false
  });

  rdl.on('line', function(line) {
    console.log(line);
  });

};
