// // function runParameter(){
// //     console.log("hello"+ param )
// //     alert(`welcome ${param}`)

// //     document.getElementById("display").innerHTML = `welcome ${param}`
// // }
// // runParameter("khaleed")

// function defaultParameter(value = "Feranmi"){
//     console.log("hello" + value)
//     alert(`welcome ${value}`)

//     document.getElementById("display").innerHTML = `welcome ${value}`
// }


// function addValues(){
//     let userInput1 = parseInt (document.getElementById("userInput1").value)
//     let userInput2 = parseInt (document.getElementById("userInput2").value)

//     let addition = userInput1 - userInput2
//     console.log(addition)

// }
// function displayNumber(value){
//     console.log(value)
//     document.getElementById("userInput1").value += value
// }
// function evaluateValues(){
//     let receivedInput =
//     document.getElementById("userInput1").value

//     let evaluateInput = eval(receivedInput)

//     console.log(evaluateInput)

//     document.getElementById("userInput1").value = evaluateInput
    
//     document.getElementById("answer").innerHTML = `<h1>${evaluateInput}</h1>`
// }
// function clearDisplay() {
//   display = "";
// }
let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
