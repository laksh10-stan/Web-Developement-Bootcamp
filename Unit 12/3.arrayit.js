// forEach loop 
//simpler, faster than for
var cols=[1,2,3,4,5,6,7];
cols.forEach(function(c){
    console.log(c);
});

// .forEach takes a callback function, that callback function is expected to have at least 1, but up to 3, arguments. This is how .forEach was designed.

// The arguments are in a specific order:
// - The first one represents each element in the array (per loop iteration) that .forEach was called on.
// - The second represents the index of said element.
// - The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).

[1,2,3].forEach(function(el, i, arr) {
    console.log(el, i, arr);
  });

  function logNums(el, i, arr) {
    console.log(el, i, arr);
  }
   
  [1,2,3].forEach(logNums);