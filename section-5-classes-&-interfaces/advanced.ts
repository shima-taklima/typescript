class User {
  private _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name.");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name.");
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const shima = new User();
shima.firstName = "Shima";
shima.lastName = "";
console.log(shima.fullName);

class Employee extends User {
  constructor(public jobTitle: string) {
    super();
  }
  work() {}
}
