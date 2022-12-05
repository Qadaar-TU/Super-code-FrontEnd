class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    return `${this.name} is ${this.age} years old`;
  }
}

const manuel = new Person("Manuel", 18);
console.log(manuel);
console.log(manuel.info());
