
//Crea una función (para cada ejercicio) que...

//1- Reciba un array por argumentos y devuelva un nuevo array igual al recibido. 
//Ejemplo de entrada: [1, 2, 3, 4, 5]. Ejemplo de salida: [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((number, index, array) => {
    return number
})
//console.log(newArray)

// 2- Reciba un array con numbers y strings y devuelva un nuevo array de la misma longitud, pero con los números multiplicados x2.
// Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
// Ejemplo de salida: Ejemplo de entrada: [2, 'hello', 4, 6, 'greetings', 8, 'bye!', 10]
const arrNumStr = [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5];
const newArrNumStr = arrNumStr.map((number, index, array) => isNaN(number) ? number : number * 2)
    /*if(isNaN(number)){
        return number;
    }else{
        return number * 2;
    }
})*/
console.log(newArrNumStr)

// 3- Reciba un array con numbers y strings y devuelva un nuevo array de la misma longitud, pero los strings 
//   que estén en posición par deben estar en mayúsculas
//   Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//   Ejemplo de salida: [1, 'hello', 2, 3, 'GREETINGS', 4, 'BYE!', 5]
const arrUpperCase = arrNumStr.filter((number, index, array) => {
    if
})



// 4- Reciba un array con numbers y strings y devuelva un nuevo array solo con números
//   Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//   Ejemplo de salida: [1, 2, 3, 4, 5]

// 5- Reciba un array con numbers y strings y devuelva un nuevo array solo con strings cuya longitud sea impar
//   Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//   Ejemplo de salida: ['hello', 'greetings']

// 6- Reciba un array con numbers y strings y devuelva un nuevo array con aquellos elementos que, siendo números, sean mayores o iguales a 5 y, siendo strings, sus longitudes sean mayores a 8
//   Ejemplo de entrada: [1, 'hello', 2, 3, 'greetings', 4, 'bye!', 5]
//   Ejemplo de salida: ['greetings', 5]

// 7- Reciba un array con numbers y devuelva la suma de todos ellos
//    Ejemplo de entrada: [1, 2, 3, 4, 5]
//    Ejemplo de salida: 15

// 8- Reciba un array con numbers y devuelva un objeto que tenga, como keys, los elementos del array y como values de esas keys, un booleano indicando si es par o n. Ejemplo:
//   Entrada: [1, 2, 3, 4, 5]
//   Salida: {
//     1: false,
//     2: true,
//     3: false,
//     4: true,
//     5: false
//   }
// 9- Reciba un array por argumentos con todo tipo de elementos (numbers, strings, booleans, objects y arrays) y devuelva la multiplicación de todos los números pares elevados al cubo (mezcla map, filter y reduce)
//   Ejemplo de entrada: [1, 'hello', 2, true, { a: 1, b: 2 }, 3, 'greetings', ['a', 'b', false], 4, false, 'bye!', 5]
//   Ejemplo de salida: 1728000

// 10- Reciba un array por argumentos con todo tipo de elementos (numbers, strings, booleans, objects y arrays) y  que haga los siguientes pasos:
//   -> Quédate solo con los strings
//   -> Obtén el valor del código ASCII de cada letra y concatena dichos resultados para cada palabra. Ejemplo 'boa' -> '9811197' (98 de la 'b', 111 de la 'o' y 97 de la 'a')
//   -> Elimina, en cada string, aquellos caracteres que sean pares (HAY QUE USAR TRIPLE IGUAL!)
//   -> Para cada elemento, suma todos sus números
//   -> Obtén la suma de todos los elementos
//   -> Devuelve la media media
//   Ejemplo de entrada: [1, 'hello', 2, true, { a: 1, b: 2 }, 3, 'greetings', ['a', 'b', false], 4, false, 'bye!', 5]
//   Ejemplo de salida: 13.33
  