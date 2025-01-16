class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    eat() {
      console.log(`${this.name} is eating`);
    }
  }
  
  // Membuat instance dari Person
  const person1 = new Person('Alice', 17);
  const person2 = new Person('Bob', 18);
  
  console.log(person1.name); // Output: Alice
  console.log(person2.name); // Output: Bob
  console.log(person1.age);
  console.log(person2.age);
  
  person1.eat(); // Output: Alice is eating
  person2.eat(); // Output: Bob is eating