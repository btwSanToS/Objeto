// Visto na última aula, fiquei curioso de como poderia realizar a criação de uma função de Seguro.
// Dados já verificados ↓↓↓↓
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
    },
    {
        nome: "Rodrigo Braz",
        idade: "27"
    },
    {
        nome: "Elizabeth Magda",
        idade: "45"
    }
],
    calcularValorSeguro: function () {
        calculoIdade = 1 // (18 a 25 anos)
        calculoIdade1 = 0.8 // (26 a 36 anos)
        calculoIdade2 = 0.6 // (37 a 60 anos)
        calculoIdade3 = 0.3 // (60++ anos )

        const idadeCondutor = parseInt(this.condutores[0].idade);
        const anoCarro = parseInt(this.ano);

        let valorSeguro = (idadeCondutor * calculoIdade) * 100 + (2024 - anoCarro) * 50;
        return valorSeguro;
    }
}
console.log("Valor do Seguro: R$", carro1.calcularValorSeguro());