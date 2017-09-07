'use strict';

(function () {
  document.getElementById("addButton").addEventListener("click", function() {
    add();
  });

  document.getElementById("subButton").addEventListener("click", function() {
    sub();
  });
})();

//Uncomment below function definition if using webpack
/*export default function add() {
  var x = parseInt(document.getElementById('x').value);
  var y = parseInt(document.getElementById('y').value);
  var sum = x + y;

  document.getElementById('result').innerHTML = sum;
}*/


//Uncomment below function definition if using gulp
function add() {
  var x = parseInt(document.getElementById('x').value);
  var y = parseInt(document.getElementById('y').value);
  var sum = x + y;

  document.getElementById('result').innerHTML = sum;
}
//Uncomment below function definition if using webpack
// export default function sub() {
//   var x = parseInt(document.getElementById('x').value);
//   var y = parseInt(document.getElementById('y').value);
//   var diff = x - y;

//   document.getElementById('result').innerHTML = diff;
// }

//Uncomment below function definition if using gulp
function sub() {
  var x = parseInt(document.getElementById('x').value);
  var y = parseInt(document.getElementById('y').value);
  var diff = x - y;

  document.getElementById('result').innerHTML = diff;
}