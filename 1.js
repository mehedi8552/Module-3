
/*
..................................problem 1 javascript For in loop.................................
Write a JavaScript function named printObjectProperties that takes an object as an argument 
and uses the for...in loop to print all the properties and their values in the following format: 
"property: value". If the object is empty, print "Object is empty".*/



function printObjectProperties(properties){
    var item
    if ( Object.keys(properties).length ==0){
        console.log("Object is empty")
    }else{
    for( item in properties){
        console.log(item+":"+properties[item])
}
}
}
properties ={Name:'Mehedi',Age:26,Location:' Mirpur 11'}
properties2={}
printObjectProperties(properties2);
printObjectProperties(properties);


/*
...................................problem 2 javascript function returns............................


Write a JavaScript function named findMaxNumber that takes an array of numbers as an argument 
and returns the maximum number in the array.If the array is empty, the function should return null.
*/

function findMaxNumber(numbers){

    if (numbers.length === 0) {
        return null;
    }
    
    var max = numbers[0];
    for (let i=1;i<=numbers.length;i++){

        if (numbers[i] > max){
           max =numbers[i]
        }
    }
    return max;
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); // Output: 30
const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15
const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null


/*....................problem 3 javascript Spread Operator.............................................
Write a JavaScript function named mergeArrays that takes two arrays as arguments and returns a new array 
that merges both arrays using the spread operator.*/

 function mergeArrays(a1,b2){
  let result = [...a1,...b2]
  return result
 }
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

/*....................problem 4 javascript arrow function.............................................
Write a JavaScript arrow function named calculateSquare that takes a number as an argument and 
returns the square of that number.*/

calculateSquare=(number)=>{
 let squar = number * number;
 return squar;
}
console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(8)); // Output: 64

/*....................problem 5 javascript es6 map.............................................
Write a JavaScript function named doubleNumbers that takes an array of numbers as an argument and
uses the ES6 map method to return a new array where each number is doubled.
*/

function doubleNumbers(numbers){
    let result = numbers.map(nu => nu*2);
    return result
}


const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
/*....................problem 6 javascript es6 static keyword.............................................
Create a JavaScript class named MathUtility with an ES6 static method called multiply.
The multiply method should take two parameters and return their product.*/
class MathUtility{
   static multiply(p1,p2){
        let sum = p1 * p2;
        return sum;
    }
}
console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16

/*....................problem 7 javascript es6 class inheritance.............................................
Create a JavaScript class named Animal with a constructor that takes two parameters: name and sound.
The class should have a method named makeSound that logs the sound of the animal.

Next, create a subclass of Animal named Dog. The Dog class should have an additional method
 named fetch that logs "Fetching the ball!".
*/

class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
        console.log(this.name+" sound is: "+this.sound)
    }
}
class Dog extends Animal{
    fetch(){
        console.log("Fetching the ball!")
    }

}
 const animal = new Animal("Lion", "Roar");
animal.makeSound(); //Lion sound is: Roar
const dog = new Dog("Buddy", "Woof");
dog.makeSound(); //Buddy sound is: Woof
dog.fetch(); //Fetching the ball!




/*....................problem 8 javascript es6 super keyword.............................................
Create a JavaScript class named Person with a constructor that takes two parameters: name and age.
The class should have a method named introduce that logs a greeting message including the person's name and age.

Next, create a subclass of Person named Student. The Student class should have an additional property named
major and an overridden introduce method. The overridden introduce method should log a message that 
includes the person's name, age, and major.*/

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log("Hello, my name is " +this.name+ "and I am " + this.age+ " years old.")
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age)
        this.major = major
    }

    introduce() { 
    console.log("Hello, my name is " +this.name+ " and I am " + this.age+ " years old. I am majoring in " + this.major+ ".");
}
}





const person1 = new Person("John", 30);
person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."
const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."






/*....................................Thank you sir.......................................................*/


/*
npm init --y
npm install nodemon -D
write it on json file script section-"start-dev":"nodemon 1.js"
npm run start-dev
*/