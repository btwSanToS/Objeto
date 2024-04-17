// Testes de Objeto Atributos e Métodos ↓↓↓↓

// Objeto e seus Atributos
let obj1 = {
    nome: 'André',
    idade: '23',
    profissao: 'Dev Front-End'
}
console.log(obj1.nome)
console.log(obj1.idade)
console.log(obj1.profissao)

// Objeto com Métodos (Comportamentos ou Funções)

let cachorro = {
    nome: "Zeus",
    latir: function(){
        console.log("Au au")
    },
    andar: function(){
        console.log("O cachorro está andando")
    }
}
cachorro.latir()
cachorro.andar()