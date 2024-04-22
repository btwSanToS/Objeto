//Notação Literal
const obj1 = {}
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object;
console.log(obj2);

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //THIS torna o parâmetro público. Nomeado, no EX. com nome.
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Modem Wi-Fi', 100, 0.2)
const p2 = new Produto('Fone de Ouvido', 449.90, 0.1)

console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

//Função Factory
const criarFuncionario = function (nome, salarioBase, faltas) {
    this.nome = nome
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('André', 7899, 2)
const f2 = criarFuncionario('João', 7899, 1)

console.log(f1.getSalario().toFixed(2))
console.log(f2.getSalario().toFixed(2))
//Teste automatização ↓↓↓↓
console.log(`O(A) funcionário(a) ${f1.nome} recebeu R$${f1.getSalario().toFixed(2)} e o(a) funcionário(a) ${f2.nome} recebeu R$${f2.getSalario().toFixed(2)}`)

//Object.create
const filha = Object.create(null);
filha.nome = 'Stela';
console.log(filha)