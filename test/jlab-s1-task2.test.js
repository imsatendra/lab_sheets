const assert = require("assert");

const { squareOfEachNumber } = require('../src/jlab-s1-task2');

assert.deepStrictEqual(squareOfEachNumber([1,2,3,4]), [1,4,9,16]);
assert.deepStrictEqual(squareOfEachNumber([1,-2,-4,0]),[1,4,16,0])