interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user: Authenticatable;

user = {
  email: "test@eaxmple.com",
  password: "abc1",
  login() {},
  logout() {},
};
