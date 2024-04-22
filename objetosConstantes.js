/*
Uma constante, não mudará o seu ENDEREÇO DE MEMÓRIA.
Os "valores" de uma constante, pode ser modificado, no caso de objetos.
Ex.:
*/
const pessoa = { nome: 'Santos' }
pessoa.nome = 'André'
console.log(pessoa)

/*
Nesse caso, o Objeto PESSOA não tem mudança no seu endereço de memória.
Por isso a modificação do seu valor.
Tentativa de mudança do ENDEREÇO DE MEMÓRIA ↓↓↓↓
*/

//pessoa = {nome: 'Stela'}

/*
Nesse caso, foi criado uma nova declaração pessoa, em OUTRO ENDEREÇO DE MEMÓRIA.
Ex:
A primeira pessoa, estava no endereço 123
A segunda pessoa, estava no endereço 456
A tentativa acima foi de modificar a declaração pessoa do endereço 123 para 456
*/

Object.freeze(pessoa)
// O objeto irá congelar, não podendo modificar nem seus valores, após a linha de freeze.

pessoa.nome = 'Stela'
pessoa.end = 'Rua Qualquer' //Nem mesmo adicionar ou excluir é possível
delete pessoa.nome
console.log(pessoa.nome) //Ignorou a nova mudança, e puxou a última declaração válida.