import * as readlineSync from 'readline-sync';

let numero1 : number = readlineSync.questionInt("Ingrese Nro 1: ")
let numero2 : number = readlineSync.questionInt("Ingrese Nro 2: ")
let otroNum : number = readlineSync.questionInt("Ingrese 1 para sumar 2 para restar y cualquier otro para salir: ")
let resultadoOper:number=0;

function calcularResultado(numero1:number, numero2:number, otroNum:number):number {
    let resultado:number=0;
if (otroNum == 1) {
    resultado = numero1 + numero2;
} else if (otroNum == 2) {
    resultado = numero1 - numero2;
    
}
return resultado; 
}

resultadoOper=calcularResultado(numero1,numero2,otroNum);
console.log('El resultado es ', resultadoOper);
