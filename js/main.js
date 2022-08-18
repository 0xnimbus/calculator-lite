//Declare the starting number
let curNum = 0 
//Declaring the base counter of 1 
let curVar = 1 
//Turning the h1 counter into a variable 
let counter = document.getElementById("counter")
//Variable to hold input 
let inputNum = 0 

//Click function for + 
document.getElementById("plus").addEventListener("click", function(){
    inputNum = document.getElementById("input").value
    inputNum = parseInt(inputNum)
    curNum = inputNum + curNum 
    document.getElementById("counter").innerHTML = `${curNum}`

    if (curNum < 0) {
        document.getElementById("counter").style.color = "red"
    } else {
        document.getElementById("counter").style.color = "black"
    }
})

//Click function for - 
document.getElementById("minus").addEventListener("click", function(){
    inputNum = document.getElementById("input").value
    inputNum = parseInt(inputNum)
    curNum = curNum - inputNum 
    document.getElementById("counter").innerHTML = `${curNum}`

    if (curNum < 0) {
        document.getElementById("counter").style.color = "red"
    } else {
        document.getElementById("counter").style.color = "black"
    }
})