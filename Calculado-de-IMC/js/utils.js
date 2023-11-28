
export function calculateIMC(Peso, Altura) {
    return (Peso / (Altura * Altura)).toFixed(1)
}


export function notNumber(value){
    return isNaN(value) || value ==""
}
