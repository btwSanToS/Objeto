const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

// Maneiras incorretas de criar um JSON
// console.log(JSON.parse("{a:1, b:2, c:3}"))
// console.log(JSON.parse("{'a': 1, 'b': 2 'c': 3}"))

//Maneira correta ↓↓↓↓
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "String", "c": true, "d": {}}'))
// Chaves e Strings devem estar em aspas duplas.