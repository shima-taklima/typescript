let hobbies = ["Sports", "Cooking"];

// hobbies.push(10);

// let users: (string | number)[];

let users: Array<string | number>;

users = [1, "Max"];
users = [5, 1];
users = ["Max", "Anna"];

// Tuple
let possibleResults: [number, number];
possibleResults = [3, 4];
// possibleResults = [5, 6, 7]; error

// Object type
let user: {
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

let val: {} = "is a value";
