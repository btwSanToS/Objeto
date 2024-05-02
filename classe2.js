class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissão = 'Professor') {
        super(sobrenome)
        this.profissão = profissão
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

// Testes ↓↓↓↓
// Classe carro.

class Carro {
    constructor(marca, modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    acelerar() {
        console.log(`O ${this.marca} ${this.modelo} está acelerando!`)
    }

    frear() {
        console.log(`O ${this.marca} ${this.modelo} está freando!`)
    }
}

//Criar o veículo com base na classe;
const carro1 = new Carro('Honda', 'Civic');
carro1.acelerar()
carro1.frear()

const carro2 = new Carro ('Mitsubishi', 'Lancer')
carro2.acelerar()
carro2.frear()