let person = { name: 'Thanh' };

console.log(person);
console.log(person.toString());

for (let key in person) console.log(key);

console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false,
});

person.name = 'John';
delete person.name;

console.log(Object.keys(person));
console.log(person);
