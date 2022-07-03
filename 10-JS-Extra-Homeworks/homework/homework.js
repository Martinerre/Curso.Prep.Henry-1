// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArray=[];
  for (let clave in objeto) {
    nuevoArray.push([clave,objeto[clave]])
  } 
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
  let cont=0;
  let ordenado={};
  for (var i=0; i<string.length; i++) {
    for (var j=i; j<string.length; j++) {
      //if (string[i] === string[j]) {
      //}
    } 
    ordenado[string[i]]=cont; // reduce el string a { a: 0, d: 0, s: 0, j: 0, f: 0, h: 0, c: 0, b: 0 }
  }
  for (let clave in ordenado) {
    for (j=0; j<string.length; j++) {
      if (clave === string[j]) { 
        cont +=1;
        ordenado[string[j]]=cont;     
      } else {};
    } 
    cont=0;
  }
  return ordenado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  var mayusc=[];
var minusc=[];

for (let i=0;i<s.length;i++) {
    if (s[i]===s[i].toUpperCase()) {
      minusc.push(s[i]);
    } else {
      mayusc.push(s[i]);
    }
}
return minusc.join("")+mayusc.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  cont=1;
  let dividido= str.split('').reverse().join('');
for (i=0;i<5;i++) {  
  var invertido = dividido.split(" ",cont).reverse().join(" ");
  cont+=1;
  //console.log(dividido);
  //console.log(invertido);
 }
  return invertido;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  let invertido=numero.toString().split("").reverse().join('');
  if (invertido == numero) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:
    var final=[];
  for (i=0;i<cadena.length; i++) {
    if (cadena[i]==="a" || cadena[i]==="b" || cadena[i]==="c") {
      
      continue;
    } else {
      final.push(cadena[i]);
    }
  }   
  return final.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
  arr.sort(compara);
  function compara (a,b) {
    return a.length - b.length;
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  var comunes=[];
  for (i=0;i<arreglo1.length;i++) {
    for (j=0;j<arreglo2.length;j++) {
      if (arreglo1[i] === arreglo2[j]) {
        comunes.push(arreglo1[i]);
      }
    }
  }  
 return comunes;  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

