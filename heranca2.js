// Cadeia de Protótipos (prototype chain)
Object.prototype.atributo0 = 'Z'
const avo = { atributo1: 'A' };
const pai = { __proto__: avo, atributo2: 'B', atributo3: '3' };
const filho = { __proto__: pai, atributo3: 'C' } // Atto3 sombreado pelo filho
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)


// Herança testes ↓↓↓↓

const carro = {
    velAtual: 0,
    velMax: 180,
    acelerarCarro(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F60',
    delta: 50,
    velMax: 350 // Shadowing
}

const bmw = {
    modelo: 'I8',
    status() { // Alterando o status para esse modelo.
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(bmw, carro)
ferrari.acelerarCarro(100)
bmw.acelerarCarro(120)
console.log(ferrari.status())
console.log(bmw.status())