class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salarioJunho = new Lancamento('Salário', 45000)
const contaDeLuzJunho = new Lancamento('Luz', -250)

const junho2024 = new CicloFinanceiro(6, 2024)
junho2024.addLancamento(salarioJunho, contaDeLuzJunho)
console.log("Sumário de Junho de 2024:", junho2024.sumario())

// Testes ↓↓↓↓

const salarioJulho = new Lancamento('Salário', 45000)
const aluguel = new Lancamento('Aluguel', -2000)
const mercado = new Lancamento('Mercado', -1000)

const julho2024 = new CicloFinanceiro(7, 2024)
julho2024.addLancamento(salarioJulho, aluguel, mercado)
console.log("Sumário de Julho de 2024:", julho2024.sumario())

const salarioAgosto  = new Lancamento('Salário', 50000)
const internet = new Lancamento('Internet', -100)

const agosto2024 = new CicloFinanceiro(2, 2024)
agosto2024.addLancamento(salarioAgosto, internet, aluguel, mercado)
console.log("Sumário de Agosto de 2024:", agosto2024.sumario())