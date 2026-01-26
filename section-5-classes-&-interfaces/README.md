# Classes & Interfaces

## 01 - What are Classes?

Classes in TypeScript (and JavaScript) are blueprints for creating objects.
They let you group data (properties) and behavior (methods) together in a clean, reusable way.

Think of it like:

Class = design / template
Object = real thing created from it

## 02 - Creating a First Class

```js
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Taklima", 25);
person1.greet();

```

## 03 - A Useful TypeScript Shortcut & Compiling to JavaScript

```js
class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}
const max = new User("Max", 36);
const fred = new User("Fred", 29);

console.log(max, fred);
```

## 04 - Making Sense of "public" and "private"

## 05 - Marking Fields as "readonly"

readonly means:

1. You can read the value
2. But you cannot change it after it is set

## 06 - Understanding Getters

1. Getter = safe way to read private data

2. Uses get keyword

3. Called like a property

4. Improves security & clean code

## 07 - Setting Values with Setters

## 08 - Exploring Static Properties & Methods

```js
class Person {
  static sayHello() {
    console.log("Hello from Person class");
  }
}
```

## 09 - Understanding Inheritance

Inheritance means One class gets properties and methods from another class. So you don’t need to write the same code again.

## 10 - The "protected" Modifier

protected means Accessible inside the class or inside child (sub) classes.
NOT accessible from outside.

## 11 - Making Sense Of Abstract Classes

## 12 - Introducing Interfaces

An interface is a contract (rule book) that tells a class What it must have but not how to implement it.

## 13 - Creating a First Interface

```js
interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}
```

## 14 - Interfaces As Object Types
