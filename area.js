class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate the area of the rectangle
    calculateArea() {
      return this.width * this.height;
    }
  
    // Method to print the area
    printArea() {
      const area = this.calculateArea();
      console.log(`The area of the rectangle is ${area} square units.`);
    }
  }
  
  // Create an instance of the Rectangle class
  const myRectangle = new Rectangle(5, 7);
  
  // Call the printArea method to display the area
  myRectangle.printArea();
  