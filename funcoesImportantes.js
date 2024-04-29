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
    enumerable: true, // Declaração para que a Chave seja visível(Numerada) ao visualizar as chaves do Obj.
    writable: false, // Declaração para alterar ou não o valor da Chave.
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2020' // Não modificado, writetable: false
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// Testes ↓↓↓↓
Object.defineProperties(pessoa, {
    altura: {
        value: 184,
        enumerable: true,
        writable: false
    },
    peso: {
        value: 85,
        enumerable: true,
        writable: true,
    },
    corOlhos: {
        value: 'Castanho escuro',
        enumerable: true,
        writable: false
    },
    calcularIMC: {
        value: function () {
            return this.peso / ((this.altura / 100) ** 2)
        }
    }
})

console.log(pessoa)
console.log(pessoa.calcularIMC())