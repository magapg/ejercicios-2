// Ejercicio 1: Verificar si un número es par o impar
function esPar(number1) {
    if (number1 % 2 === 0) {
        console.log("es par");
    }else {
        console.log("no es par");
    }
}

esPar(5);

// Ejercicio 2: Suma de los dígitos de un número
function sumaDigitos(numero) {
    let suma = 0;
    let numeroString = numero.toString(); 
  
    for (let i = 0; i < numeroString.length; i++) {
      suma += parseInt(numeroString.charAt(i)); 
    }
  
    return suma;
  }
  
  let numero = 123;
  let suma = sumaDigitos(numero);
  console.log(suma); 

 // Ejercicio 3: Generar una secuencia
 function generarSecuencia(numero2) {
    for (let i = 1; i <= numero2; i++) {
    console.log(i);
        
    }
 }

 let numero2 = 5
 generarSecuencia(numero2);


 // Ejercicio 4: Tabla de multiplicar
 function tablaMultiplicar(numero3) {
    for (let y = 1; y <= 10; y++) {
      let resultado = numero3 * y;
      console.log(numero3 + ' x ' + y + ' = ' + resultado);
    }
  }
  let numero3 = 5;
  tablaMultiplicar(numero3);

  // Ejercicio 5: Números primos
  function esPrimo(numero4) {
    if (numero4 < 2) {
      return false;
    }
  
    for (let u = 2; u <= Math.sqrt(numero4); u++) {
      if (numero4 % u === 0) {
        return false;
      }
    }
    return true;
  }
  
  let numero4 = 13;
  let resultadoo = esPrimo(numero4);
  console.log(resultadoo); 
  
  // Ejercicio 1: Números perfectos
  function esNumeroPerfecto(numero5) {
    let sumaDivisores = 0;
  
    for (let a = 1; a < numero5; a++) {
      if (numero5 % a === 0) {
        sumaDivisores += i;
      }
    }
  
    return sumaDivisores === numero5;
  }

  // Ejercicio 2: Palíndromo
  function esPalindromo(palabra) {
    let palabraRevertida = palabra.split('').reverse().join('');
    return palabra === palabraRevertida;
  }

console.log(esPalindromo("radar"));    
console.log(esPalindromo("hola"));      
console.log(esPalindromo("reconocer")); 

// Ejercicio 3: Cálculo del factorial
function calcularFactorial(numero6) {
    if (numero6 === 0 || numero6 === 1) {
      return 1;
    }
  
    let factorial = 1;
  
    for (let d = 2; d <= numero6; d++) {
      factorial *= d;
    }
  
    return factorial;
  }
console.log(calcularFactorial(5)); 
console.log(calcularFactorial(0));  
console.log(calcularFactorial(1));  
console.log(calcularFactorial(10)); 

// Ejercicio 4: Ordenar palabras
function ordenarPalabras(palabrass) {
    return palabrass.sort();

  }
let palabrass = ["manzana", "banana", "pera", "naranja"];
let palabrasOrdenadas = ordenarPalabras(palabrass);

console.log(palabrasOrdenadas);
 // Ejercicio 5: Contar letras
 function contarLetras(frase) {
    let contador = {};
  
    for (let k = 0; k < frase.length; k++) {
      let letra = frase[k];
  
      if (letra !== ' ') {
        if (contador[letra]) {
          contador[letra]++;
        } else {
          contador[letra] = 1;
        }
      }
    }
  
    return contador;
  }
  
  let frase = "Hola mundo";
  let resul = contarLetras(frase);
  console.log(resul);
  
 
  

  
  
  

  
 


    

   

  

  

