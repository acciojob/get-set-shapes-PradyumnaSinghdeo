// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  
  get width() {
    return this._width;
  }

  
  get height() {
    return this._height;
  }

  
  getArea() {
    return this._width * this._height;
  }
}


class Square extends Rectangle {
  constructor(side) {
    // Call the Rectangle constructor with side as both width and height
    super(side, side);
  }

  
  getPerimeter() {
    return 4 * this.width; // or 4 * this.height since width = height in a square
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
