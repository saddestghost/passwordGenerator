let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let number = ["1","2","3","4","5","6","7","8","9","0"]
let upper = ["A","B","C","D"]

function startPrompt(){
    debugger
    let password = []
    let allPossible = []
    let length = prompt("length of phrase")
    let first = confirm("Do you like Pizza?")
    let second = confirm("Do you like Tacos?")
    let third = confirm("Do you like Sushi?")

    if(first){
        allPossible = [...allPossible,...lower]
    }
    if(second){
        allPossible = [...allPossible,...number]
    }
    if(third){
        allPossible = [...allPossible,...upper]
    }

    for(let i = 0; i < length;i++){
        let randomChar = allPossible[Math.floor(Math.random() * allPossible.length)] 
        password.push(randomChar)
    }

    console.log(password)
}

startPrompt()