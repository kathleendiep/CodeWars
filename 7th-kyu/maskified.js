// return masked string

// so this is a string of numbers
// return: a masked string 
// example: ############4567



function maskify(cc) {
    let maskified = '';
    let lastFour = cc.substr(-4);
    for (var i = 0; i < cc.length-4; i++) {
        maskified+= '#';
        }
    return maskified + lastFour  
  }


