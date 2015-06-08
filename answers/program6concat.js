//Buffer text and reverse it
var concat = require('concat-stream');
var stream = require('stream');

function reverseString(theOriginalString) {
  var index = theOriginalString.length;
  var retVal = [];
  while(index > 0) {
    index--;
    retVal.push(theOriginalString.charAt(index));
    // console.log('the charAT ' + index + ' is  ' + retVal[retVal.length - 1]);

  }
  // console.log(retVal);
  return retVal.join('');
}

function makeItHappen(dataFromConcat) {
  var retVal = stream.Readable();
  // console.log("HERE");
  // console.log(dataFromConcat);
  retVal._read = function() {
    retVal.push(reverseString(dataFromConcat.toString()));
    retVal.push(null);
  }
  retVal.pipe(process.stdout);
}

process.stdin.pipe(concat(makeItHappen));
// Here's the reference solution:

// var concat = require('concat-stream');
//
// process.stdin.pipe(concat(function (src) {
//   var s = src.toString().split('').reverse().join('');
//   console.log(s);
// }));
