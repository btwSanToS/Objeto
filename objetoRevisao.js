// Criação de produto referênciando pares chave/valor.

const monitor1 = new Object
monitor1.nome = 'Monitor Gamer',
    monitor1.categoria = 'Eletrônicos',
    monitor1.preco = '1129',
    monitor1['Marca do produto'] = 'SAMSUNG'

console.log(monitor1)
delete monitor1.categoria
console.log(monitor1)

const monitor2 = new Object
monitor2.nome = "Monitor HD",
    monitor2.categoria = 'Eletrônicos',
    monitor2.preco = '990,90',
    monitor2['Marca do Produto'] = 'LG'
console.log(monitor2)

const carro1 = {
    marca: 'Audi',
    modelo: "A3",
    ano: "2021",
    proprietario: {
        nome: "André Santos",
        idade: "23",
        endereco: {
            logradouro: "Rua Fictícia",
            numero: "46",
            cep: "12333-456"
        }
    },
    condutores: [{
        nome: "André Santos",
        idade: "23"
    },
    {
        nome: "Stela Santos",
        idade: "23"
    }],
    calcularValorSeguro: function () { // Também é possível inserir uma função dentro do Objeto.
    }
}
/* 
A chave é de extrema importância para incluir os outros valores a serem inseridos.
 Sem a mesma, só é possível inserir um valor, dentro do código.
*/
// Também é possível inserir um novo dado do objeto, acessando cada atributo.
carro1.proprietario.endereco.bairro = "Bairro dos Estudiosos"
console.log(carro1)
console.log(`Condutores ativos: ${carro1.condutores.length}`)

/*
delete carro1.condutores
delete carro1.calcularValorSeguro
delete carro1.proprietario.endereco
console.log(carro1)
Como é possível incluir, o oposto também pode ser utilizado.
*/