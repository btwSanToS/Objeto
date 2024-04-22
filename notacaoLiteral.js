const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c }; // Declaração Chave + valor
const obj2 = {a, b, c} // Declaração valor. Não necessário chave.
console.log(obj1, obj2)

const nomeAtributo = 'Nota';
const valorAtributo = 8;

const obj3 = {}
obj3 [nomeAtributo] = valorAtributo // Chave + Valor
console.log(obj3)

//Criação direta ↓↓↓↓
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

//Criação com função ↓↓↓↓
const obj5 = {
    testeFunção(){
        //Tratativa da função ....
    }
}
console.log(obj5)