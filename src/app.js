(function() {
  "use strict"

  var addToLat = require('./js/addToLat')

  ;

  var argvs = process.argv;

  if(argvs.length > 2) {

    // accept params
    var param1 = argvs[2]
    ;

    switch (param1) {

      case '-i':

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



  //
  // addToLat('No.108, Sec. 5, Anhe Rd., Annan Dist., Tainan City 709, Taiwan', function(err, location) {
  //
  //   console.log(location);
  //
  // });

})();
