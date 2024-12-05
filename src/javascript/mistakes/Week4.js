// Mistake: Forgetting to call super
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(breed) {
    this.breed = breed;
  }

  sayHi(){
    console.log(`${this.name}: ${this.breed}`)
  }
}

const dog = new Dog("bulldog");
dog.sayHi();


// Mistake: Setting something before calling super
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    this.breed = breed;
    super(name);
  }
}

const dog = new Dog("bulldog");


// Mistake: Calling super on an arrow function
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello = () => {
  	console.log(`Hello, I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  sayHello = () => {
    super.sayHello();
    console.log(`I am in grade ${this.grade}`);
  }
}

const student = new Student("John", 10);
student.sayHello();

// Mistake: Misuing static method
class MathUtils {
  static PI = 3.14159;
  // …Rest of code
}

const utils = new MathUtils();
console.log(utils.PI);

// Mistake: Registering an event and not deregistering
class Widget {
  constructor(id) {
    this.id = id;
    window.addEventListener(
      "resize",
      this.handleResize
    );
  }

  handleResize = () => {
    // …Rest of logic
  }
}

const widget = new Widget("1")
