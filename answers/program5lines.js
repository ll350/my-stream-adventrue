var through = require('through2');
var split = require('split');

var isOdd = true;
function toggleCase(inValue) {
  if(isOdd) {
    isOdd = false;
    return inValue.toString().toLowerCase();
  }
  else {
    isOdd = true;
    return inValue.toString().toUpperCase();
  }
}
function write(buffer, encoding, next) {
  //TODO:WRONG
  //buffer.pipe(split).toggleCase();
  if(buffer) {
    // console.log(buffer);
    var smurf = toggleCase(buffer);
    // console.log(smurf + '\n');
    this.push(smurf);
  }
  next();
}

function end(done) {
  done();
}

var theStream = through(write, end);
process.stdin.pipe(theStream).pipe(process.stdout);
