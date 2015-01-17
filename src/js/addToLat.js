module.exports = function(address, cb) {
  
  "use strict"

  var querystring = require('querystring')
    , http        = require('http')
  ;

  // querystring
  var qs = {
    address: address,
    sensor: true
  };

  // http get options
  var options = {
    hostname: 'maps.googleapis.com',
    port: 80,
    path: '/maps/api/geocode/json?' + querystring.stringify(qs),
    method: 'GET'
  };

  // send ajax to convert address
  http.get(options, function(res) {

    var recData = '';

    res.setEncoding('utf8');

    if(res.statusCode === 200) {

      //receive data by chunk
      res.on('data', function (chunk) {
        recData += chunk;
      });

      //wait all data to be received
      res.on('end', function(){

        // change receiving data from string to json.
        var result = JSON.parse(recData);

        if(result.status === 'OK') {

          // pick the location field which contains lat and lng attributes.
          if('results' in result) {

            var location = result.results[0].geometry.location;
            cb(null, location);

          }

        } else {

          cb('AJAX ERROR: ' + result.status);

        }

      });

    } else {

      cb('HTTP ERROR: status code: ' + res.statusCode);

    }

  });

};
