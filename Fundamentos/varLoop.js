const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

const func = []

for (let a=0; a<10; a++){
    func.push(function(){
        console.log(a)
    })
}
func[2]()
func[8]()