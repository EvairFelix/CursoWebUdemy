const prod1 = {}
prod1.nome = 'Celular Ultra'
prod1.preco = 4998.90
prod1['Desconto fidelidade'] = 0.40 // quando necessario atributo com espaço, mas evitar

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
}

console.log(prod2)

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())