// imports
import { Modal } from "./modal.js" ;
import { AlertErro } from "./error.js";
import { calculateIMC,notNumber } from "./utils.js";

// Variaveis 
const form = document.querySelector("form")
const inputPeso = document.querySelector("#peso")
const inputAltura = document.querySelector("#altura")


// Funçaõ
form.onsubmit = function (event) {
    event.preventDefault()
  

    const Peso = inputPeso.value
    const Altura = Number(inputAltura.value)
 const weightOrHeightIsNotANumber= notNumber(Peso) || notNumber(Altura)

 if (weightOrHeightIsNotANumber){
    AlertErro.open()
    return
 }
    
     AlertErro.close()
   
        const result = calculateIMC(Peso, Altura)
        displayResultMessage(result)
 
}

function displayResultMessage(result){
Modal.Tittle.innerText = `Seu IMC é de ${result}`
        Modal.open()
}


inputAltura.oninput= ()=> AlertErro.close()
inputPeso.oninput= ()=> AlertErro.close()
