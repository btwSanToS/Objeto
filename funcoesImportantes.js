const pessoa = {
    nome: 'André',
    idade: 23,
    peso: 85
}

console.log(Object.keys(pessoa)) // Retornará as chaves do Objeto;
console.log(Object.values(pessoa)) // Retornará os valores do Objeto;
console.log(Object.entries(pessoa)) // Retornará um array com chave e valor, separados por dupla;


// Destructuring ↓↓↓↓
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Outra maneira de utilizar o forEach ↓↓↓↓

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento)