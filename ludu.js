const ludu = Math.floor(Math.random() * 7);

//min = 0 max = 6 so for ludu min+ max + 1 = 7

function getRandom(min, max) {
  return Math.floor(Math.random() * (min + max)) + 1;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
  console.log(getRandom(0, 6));
}, 2000);
