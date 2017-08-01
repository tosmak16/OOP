'use strict'

/*
OOP Learn outcome and knowledge unit

Abstraction
Encapsulation
Inheritance
Polymorphism
Overloading
Static Method
 */

/*
Encapsulation & Abstraction

   Encapsulation is the process of hiding relevant data about
   an object in order to reduce complexity and increase 
   efficiency. It also protects the object from outside 
   interference and misuse. This is done through the process of abstraction.
   An example is given below:
 */
// Declaring class Shape
class Shape {
    //class shape constructor
    constructor(name, height, width) {
            this.name = name;
            this.height = height;
            this.width = width;
        }
        // this method displays the shape attributes or properties
    displayShape() {
            console.log("The name of the shape is : " + this.name);
            console.log("The height of the shape is : " + this.height);
            console.log("The width of the shape is : " + this.width);

        }
        //this method calculate and get the area of the shape
    getArea() {
        return this.height * this.width;
    }
}


//Instantiate shape class as sObject ......!!! object is an instance of a class
let sObject = new Shape("square", 10, 10);
//access displayShape method via the Class shape instance
sObject.displayShape();
console.log("Area:" + sObject.getArea());

/*
Inheritance


Inheritance allows new objects to take the properties of existing objects. 
This is done by defining a base class from which other child classes can inherit object and 
properties from. Inheritance helps to avoid code duplication and is one of the core tenets of OOP.
*/

//Inheritance Example using class Shape
//Rectangle Inherit all the members and methods in Shape
class Rectangle extends Shape {
    constructor(rHeight, rWidth) {
            super();
            this.name = "rectangle";
            this.height = rHeight;
            this.width = rWidth;
        }
        /*

            Polymorphism is another important concept in OOP.
             It allows child classes to override specific behaviours of parent classes.
             It takes advantage of inheritance to make this happen

             the method created below is an example of Polymophism
             so to print out area of reactangle i can use printGetArea method instead of getArea method
        */

    printGetArea() {
        console.log(super.getArea());
    }

}

let rObject = new Rectangle(10, 5);
rObject.displayShape();
rObject.printGetArea();

/*
Overloading is the ability of one function to perform different tasks i.e.
 it allows creating several function with the same name which differ from each other in the type of the input
  and the output of the function. A simple example is shown below:
*/
class Triangle extends Shape {
    constructor(base, height) {
            super();
            this.name = "Triangle";
            this.height = height;
            this.base = base;

        }
        //Method Overloading Example 1
        //displayShape method in class Triangle overides displayShape method in class shape by using the same name and changing its ouput
        // so displayShape methode calls base instead of width

    displayShape() {

            console.log("The name of the shape is : " + this.name);
            console.log("The height of the shape is : " + this.height);
            console.log("The base of the shape is : " + this.base);

        }
        //Method Overloading Example 2
        //getArea method in class Triangle overides getArea method in class shape by using the same name and changing its ouput

    getArea() {

        return ("Area of a Triangle is  " + (this.height * this.base) / 2);
    }
}


let tObject = new Triangle(4, 6);
tObject.displayShape();
console.log(tObject.getArea());


// Static Method
//This are methods that can be called without instanting the class
//Example is shown below
class staticShape {
    constructor(sName) {
        this.name = sName;

    }

    static print() {
        console.log("this is a static method called " + this.name);
    }
}

staticShape.print();


//Thanks!!