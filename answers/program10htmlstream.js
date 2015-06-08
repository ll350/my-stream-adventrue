var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();

//var music = tr.select('.loud').createStream();
// var music = tr.select('.loud', function(data) {
//   data.toString().toUpperCase();
// }).createStream();
process.stdin.pipe(tr).pipe(process.stdout);
var music2 = tr.select('.loud').createStream();

var theTransformer = through(function(chunk, encoding, callback) {
  music.on('data', function(data) {
    var reWrite = data.toString().toUpperCase();
    music.write(reWrite);
  });
  // var reWrite = chunk.toString().toUpperCase();
  // music.write(reWrite);
  callback();
});


var theOtherTransformer = through(function(chunk, encoding, callback) {
  //TODO: this.push idea came from the solution
  this.push(chunk.toString().toUpperCase());
  callback();
});


// music2.pipe(theOtherTransformer).pipe(process.stdout);
// music.on('data', function(data) {
//   console.log(data.toString());
// })
//TODO: This idea came from the solution
music2.pipe(theOtherTransformer).pipe(music2);


// music.pipe(theTransformer).pipe(process.stdout);


//Alternate

// tr.select('.loud').createStream();

// process.stdin.pipe(theOtherTransformer).pipe(process.stdout);
// process.stdin.pipe(theTransformer).pipe(process.stdout);
