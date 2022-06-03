//Wes 
//Project 6

//Part 4 --> Create and test Shape base class

class Shape {
    constructor(sides = []) {
        this.sides = sides;
    }
    perimeter() {
        return (this.sides.length) ? this.sides.reduce((a, b) => a + b) : 0;
    }
}

//test
/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/


//Part 5a --> Implement and test Rectangle class

class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area()
    {
        return this.length * this.width;
    }
}

//test
/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/


//Part 5b --> Implement and test Triangle class

class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super(sideA, sideB, sideC)
        this.sideA = sideA
        this.sideB = sideB
        this.sideC = sideC
    }
    area() {
        let s = (this.sideA + this.sideB + this.sideC)/2;
        return Math.sqrt(s*((s-this.sideA)*(s-this.sideB)*(s-this.sideC)));
    }
}

//test
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/


//Part 6 --> Create generic block of code for processing an array of sides arrays

//Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const element of data)
{

let object = null; 

length = element.length;

switch(length) 

{

case 2:

{

object = new Rectangle(element[0], element[1]);

console.log(` ${(object.length == object.width) ? " Square " : " Rectangle "} with sides ${element.toString()} has perimeter of ${object.perimeter()} and area of ${object.area()} `);
break;
}

case 3:

{

object = new Triangle(element[0], element[1], element[2]);

console.log(` Triangle with sides ${element.toString()} has perimeter of ${object.perimeter()} and area of ${object.area()} `);
break;
}

default: console.log(` Shape with ${length} sides is unsupported `); 

}
}
