const saudacao = 'Opa'

function exec(){
    const saudacao = 'Fala'
    return saudacao
}

const cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua vitorino',
        numero: 118
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
