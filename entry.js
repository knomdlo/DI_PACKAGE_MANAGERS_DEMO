import add from './src/addition';
import sub from './src/subtraction';

document.getElementById("addButton").addEventListener("click", function() {
  add();
});

document.getElementById("subButton").addEventListener("click", function() {
  sub();
});