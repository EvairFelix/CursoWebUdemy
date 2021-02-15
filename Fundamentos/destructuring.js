//function rand({ min = 0, max = 1000}){
  //  const valor = Math.random() * (max - min) + min
    //return Math.floor(valor)
//}

//const obj = { max: 50, min:40}
//console.log(rand(obj))
//console.log(rand({min: 1}))


function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([]))