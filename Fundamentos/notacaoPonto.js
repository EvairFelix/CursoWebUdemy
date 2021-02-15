console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1)

function obj(nome){
    this.nome = nome
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2)
console.log(obj3)

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua a',
        numero: 2
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)
const {nome:n, idade:i} = pessoa
console.log(n, i)
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)
const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)