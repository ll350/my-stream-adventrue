//Transform input stream into uppercase and write out
var throughIt = require('through2');

function write(buffer, encoding, next) {
  if(buffer) {
    //console.log(buffer.toString());
    this.push(buffer.toString().toUpperCase());
  }

  next();
}

function end(done){
  done();
}

var theStream = throughIt(write, end);

process.stdin.pipe(theStream).pipe(process.stdout);
