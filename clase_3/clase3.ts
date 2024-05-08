
import * as readlineSync from 'readline-sync';
let numeroIngresado:number = readlineSync.questionInt("Ingrese un numero ");
const cero = 0
if (numeroIngresado === cero){
    console.log("El numero es 0")
}
else if (numeroIngresado % 2 == 0){
    console.log("Es Par")
}
else{
    console.log("Es Impar")
}


/*let precioSinDescuento:number = readlineSync.questionInt("Ingrese el precio sin descuento ");
let descuento:number = 0.1;
let aplicarDescuento = precioSinDescuento * descuento;
let precioFinal = precioSinDescuento - aplicarDescuento;

console.log("el precio final es " + precioFinal)*/

/*let nroDeseado:number = readlineSync.questionInt("Ingrese el numero ");

if (nroDeseado > 20){
    console.log("el numero es mayor a 20")
}
else{
    console.log("el numero es menor que 20")
}*/
/*let edad:number = readlineSync.questionInt("Ingrese su edad ");

if (edad >18){
    console.log("Es mayor de edad")
}
else{
    console.log("No es mayor")
}
*/
