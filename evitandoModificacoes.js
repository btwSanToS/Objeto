// Object.preventExtensions
/* 
Irá impossibilitar quando extensão no Objeto que não seja existente.
Impossibilitando a criação de novas pares chaves/valores
*/

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
// Verificar se um Objeto é EXTENSÍVEL. Retorno // False

produto.nome = 'Borracha' // Será modificado, pois existe no objeto.
produto.descricao = 'Borracha escolar branca' // Não existe, não será criado.
delete produto.tag
/*
É possível apagar, mas não extender o objeto, nesses casos.
Em outras palavras, pode ser MODIFICADO.
*/
console.log(produto)

// Object.seal
/* 
Não poderá excluir ou criar novas chaves/valores no objeto.
Apenas modificar as existentes.
*/
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
delete pessoa.idade 
// Vê-se que a idade não foi apagada
console.log(pessoa)
pessoa.idade = 20
console.log(pessoa)
// Vê-se que a idade foi ALTERADA.

// Resumindo, só pode ser MODIFICADO chaves e valores existentes.

//Obj.freeze = selado + valores constantes. Não irá alterar NADA.