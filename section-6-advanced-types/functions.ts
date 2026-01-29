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
