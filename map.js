const array = [1, 2, 3, 4, 5];

Array.prototype.customMap = function (fc) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(fc(this[i], i));
  }

  return newArray;
};

console.log(array.customMap((a, index) => a + index));

Array.prototype.customReduce = function (acc, fc) {
  for (let i = 0; i < this.length; i++) {
    acc = fc(acc, this[i]);
  }

  return acc;
};

console.log(array.customReduce(0, (acc, num) => acc + num));
