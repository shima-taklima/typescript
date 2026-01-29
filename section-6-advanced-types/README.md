# Advanced Types

## 01 - Intersection Types

```js
interface FileData {
  path: string;
  content: string;
}

interface DatabaseData {
  connectionUrl: string;
  credentials: string;
}

interface Status {
  isOpen: boolean;
  errorMessage?: string;
}

interface AccessedFileData extends FileData, Status {}
interface AccessedDatabaseData extends DatabaseData, Status {}
```

## 02 - More on Type Guards

A Type Guard is a way to check the type at runtime. so TypeScript can narrow the type safely.
In short:

Type Guard = type check + safety.

## 03 - Discriminated Unions

## 04 - Type Guards via "instanceof"

instanceof is a type guard that checks if an object is an instance of a class.

## 05 - Function Overloads

```js
function getLength(val: string): string;
function getLength(val: any[]): number;

function getLength(val: string | any[]) {
  if (typeof val === "string") {
    return `${val.split(" ").length} words`;
  }
  return val.length;
}

const numOfWords = getLength("does this work?");
// Type: string

const numItems = getLength(["Sports", "Cookies"]);
// Type: number
```
