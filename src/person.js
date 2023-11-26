export class Person {
  constructor(name) {
    this.name = name;
  }

  great() {
    return `hello ${this.name}`;
  }
}
