// Function to capture console logs
(function () {
  var oldLog = console.log;
  console.log = function (message) {
    document.getElementById("console").innerHTML += "<p>" + message + "</p>";
    oldLog.apply(console, arguments);
  };
})();

const createArray = function () {
  const arr = [].slice.call(arguments);
  return arr.sort();
};

console.log(createArray(1, 6, 7, 9, 10));

document.body.contentEditable = true;

console.log([] + []);

console.log({} + []);
console.log("rafat");

// ..............

function b() {
  console.log(`this length is ${this.length}`);
}
let a = {
  length: 10,
  method: function (b) {
    arguments[0]();
  },
};
a.method(b, 101, 456);
//.....................
const c = "constructor";
console.log(typeof c[c](123));

console.log(0.1 + 0.2);

let str = new String("Bangladesh");
console.dir(str);
console.log("rafat".__proto__.__proto__.__proto__); //null
