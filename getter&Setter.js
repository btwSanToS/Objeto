const sequencia = {
    _valor: 1, // Convenção para usar apenas dentro do objeto sequência "_"
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

// Para acessar o get

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // Incrementou no 1000
sequencia.valor = 800 
console.log(sequencia.valor, sequencia.valor)
// Vai manter o maior valor, não podendo diminuir