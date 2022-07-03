'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let i = 2;
  while(num/i>=1){
    if(num%i===0){
      num = num/i;
      arr.push(i);
    }else if(num%i!==0){
      i++
    }    
  }
  return arr
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //[2,3,1,5,4]
  for(let i = 0 ; i < array.length ; i++){
    var uno = undefined;
    var dos = undefined;
    for(let j = i+1 ; j<array.length; j++){
      var current = array[i];
      if(current>array[j]){
        var uno = array[i];
        var dos = array[j];
        array[i]=dos;
        array[j]=uno
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0 ; i < array.length ; i++){    
    var current = array[i]
    for(let j = 0 ; j<array.length; j++){
      if(current>array[j]){
        var spl = array.splice(j,1)
        array = spl.concat(array)
      }
    }
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //[2,3,1,5,4]
  
  for(let i = 0 ; i<array.length ; i++){
    var pos = 0;
    var valor = array[i];
    var h = 0;
    for(let j = i+1 ; j<array.length ; j++){
      if(array[i]>array[j]){
        if(valor>array[j]){
          pos = j;
          valor = array[j]
          h++
        }
      }
    }
    if(h!==0){
      array[pos]=array[i]
      array[i]=valor
    }
  }      

  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
