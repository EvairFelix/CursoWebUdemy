function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6)

function soma(a, b=1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))


const sub = (a, b) => a - b
console.log(sub(2,3))

for (var i = 0; i<10; i++){
    console.log(i)
}