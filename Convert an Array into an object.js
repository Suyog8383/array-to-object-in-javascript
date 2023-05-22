const input = ["John", "Peter", "Sally", "Jane"];
let obj1 = Object.assign({}, input);
let obj2 = { ...input };
console.log(obj1); //{0: 'John', 1: 'Peter', 2: 'Sally', 3: 'Jane'}
console.log(obj2); //{0: 'John', 1: 'Peter', 2: 'Sally', 3: 'Jane'}
