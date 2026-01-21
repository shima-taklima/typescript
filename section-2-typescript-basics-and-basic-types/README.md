# TypeScript Basics & Basic Types

## 01 - Module Introduction

**TypeScript Essentials:**

1. Basic Built-in Types

2. Object & Array Types

3. Function Types

4. Custom Types

5. Special Types

## 02 - Using Node.js To Run JavaScript Code

## 03 - The "any" Type

The any type in TypeScript means:

**“Turn off type checking.”**

It lets a variable be anything, just like plain JavaScript.

When a variable is any, TypeScript stops protecting you.

```js
let value: any = 10;

value = "hello";
value = true;
value = { name: "Taklima" };
```

No errors
No safety

## 04 - Understanding Union Types

A union type means:

“This value can be one of these types.”

Syntax uses the pipe symbol |:

```js
let id: number | string;

id = 101;
id = "A102";
id = true;  // ❌ Error

```

## 05 - Arrays & Types

Arrays & Types in TypeScript are about making sure every item in an array has the correct type.

```js
let hobbies = ["Sports", "Cooking"];

hobbies.push(10); // ❌ Error
```

## 06 - Advanced Array Types

(number | string)[] → mixed items allowed

number[] | string[] → array must be all numbers OR all strings.

```js
let users: (string | number)[];

users = [1, "Max"];
users = [5, 1];
users = ["Max", "Anna"];
```

## 07 - A First Glimpse At Generic Types - Alternative Array Type Declaration

```js
let users: Array<string | number>;

users = [1, "Max"];
users = [5, 1];
users = ["Max", "Anna"];
```

TypeScript checks each item individually, not the whole array.

## 08 - Making Sense of Tuples

A tuple is an array with a fixed length and fixed types in fixed positions.

```js
let possibleResults: [number, number];
possibleResults = [3, 4];
// possibleResults = [5, 6, 7]; error
```

## 09 - Object Types

```jslet user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Max",
  age: 38,
  hobbies: ["Sports", "Cooking"],
  role: {
    description: "admin",
    id: 5,
  },
};
```

Object types describe structure, not values.

## 10 - Tricky: The "Must Not Be Null" Type

```js
let val: {} = "is a value";
```

In TypeScript, {} does NOT mean “empty object”.

It actually means: “Any non-null and non-undefined value”

## 11 - Flexible Objects with the Record Type

Record<K, V> is a utility type used to create an object type where:

K → keys

V → values

```js
let scores: Record<string, number> = {
  math: 90,
  english: 85
};
```

## 12 - Working with Enums

```js
enum Role {
  Admin = 1,
  Editor,
  Guest,
}

let userRole: Role = 1;
userRole = Role.Guest;
```

An enum is a collection of fixed values.

## 13 - Being Specific With Literal Types

A literal type means: “This value must be exactly this value.”

```js
let direction: "up";
direction = "up";
direction = "down"; // ❌ Error
```

## 14 - Type Aliases & Custom Types

A type alias lets you create a custom name for a type.

```js
type UserName = string;

let name: UserName = "Taklima";

```

## 15 - Function Return Value Types

```js
function add(a: number, b: number) {
  return a + b;
}
```

## 16 - The "void" Type

The void type in TypeScript is used for functions that do not return a value.

```js
function log(message: string) {
  console.log(message);
}
```

## 17 - The "never" Type

The never type in TypeScript represents values that never happen.

```js
function logAndThrow(errorMessage: string) {
  console.log(errorMessage);
  throw new Error(errorMessage);
}
```

## 18 - Functions As Types

## 19 - null & undefined - Special Types

## 20 - Forced "Not Null" And Optional Chaining

## 21 - Type Casting

Type Casting in TypeScript (also called Type Assertion) means telling TypeScript what the type is, when you know better than the compiler.

## 22 - The "unknown" Type
