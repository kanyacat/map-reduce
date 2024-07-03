const array = [1, 2, 3, 4, 5];

Array.prototype.customReduce = function (acc, fc) {
  for (let i = 0; i < this.length; i++) {
    acc = fc(acc, this[i]);
  }

  return acc;
};

console.log(array.customReduce(0, (acc, num) => acc + num));
