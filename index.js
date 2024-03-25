function calculadora(Num1, Num2, Operador){
    let resultado
    let Num1 = parseInt(Numero1)
    let Num2 = parseInt(Numero2)

switch(Operador){
    case "+":
        resultado = Num1 + Num2
    break;

    case "-":
        resultado = Num1 - Num2
    break;

    case "*":
        resultado = Num1 * Num2
    break;

    case "/":
        resultado = Num1 / Num2
    break;

    case "e":
        let contador = 1
        resultado = Num1 * Num2 
        while(contador < Num2 - 1) {
            resultado = resultado * Num1
            contador++
        }
        break;
    }
    if (resultado == undefined || resultado > 1000000)
        resultado = "ERRO"
    return resultado
}
