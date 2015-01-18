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

  // read input file line by line.
  // push each line to inputQueue.
  var rdl = readline.createInterface({
    input    : inputStream,
    output   : process.stdout,
    terminal : false
  });

  var inputQueue = [];

  rdl.on('line', function(line) {

    inputQueue.push(line);

  });

  var test = [];

  test.push('台南市安南區安昌街275巷21弄18號');
  test.push('台南市安和路五段108號');
  test.push('基隆路四段43號');

  // start to convert
  batch(test, [], function(){

  });

};
