#!/usr/bin/node
const Rectangle = require('./4-rectangle'); // Import the Rectangle class

class Square extends Rectangle {
  constructor (size) {
    super(size, size); // Call the constructor of the parent class with the same arguments
  }
}
module.exports = Square;
