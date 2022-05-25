```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```
//la respuesta correcta, despues de varios intentos, es que el codigo va a correr primero guardando en la memoria
//las variables x,a,b,c. Esta ultima no devuelve nada en pantalla ya que no es una IIFE. Pasa a c(8,9,10).
//entonces c(8,9,10)=function(8,9,10){...var f=func(8,9,10){...} f(8,9,10)console.log(9)}
//paso a paso: 
//1ero: dentro del scope de c() creo una var x=10.
//2do: devuelvo en pantalla x, que buscando en el propio scope se declar anteriormente que x=10, entonces devuelvo +++10+++.
//3ro: devuelvo "a" que es +++8+++ ya que ese es el valor dado por la funcion y esta en el scope mas cercano.
//4to: declaro la var f en la memoria, sin devolver nada ya que no es una IIFE.
//5to: me pide f(a,b,c), en mi scope mas cercano a=8,b=9 y c=10.Entonces es f(8,9,10). Ahora me adentro de f con los
// valores de a;b;c dados: declaro que b=a ==> b=8, luego devuelvo console.log(b) ==> console.log(8) ==> +++8+++,
// y luego en el scope de f declaro b=c ==> b=10 y tambien x=5 DENTRO DE f ambos.
//6to: finalizado con f(a,b,c) sigo dentro de c y me queda console.log(b). Entonces miro el scope de c y encuentro que b=9.
//por lo que devuelvo +++9+++.
//7mo: termine con c(8,9,10) entonces sigue console.log(b), miro el scope que es el global y anteriormente declare que b=10
//console.log(b)=console.log(10)=+++10+++.
//8vo: lo mismo que arriba busco en el scope si declare x y si es x=1 entonces devuelvo +++1+++.


//+++num+++, marque lo que se devuelve en pantalla al ejecutar el codigo.
// el resultado final en patalla es :   
//10
//8
//8
//9
//10
//1


//---------------------------------------------------------------------------------------------------------------//


console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

// 1ro: js realiza hoisting el cual guarda en la memoria la function foo() y var bar y baz queda como baz que no esta definido
// 2do: console.log(bar)= undefined 
// 3ro: console.log(baz)==> no existe entonces tirar error y se frena el codigo.


//----------------------------------------------------------------------------------------------------------------//


var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

//retorna Franco

//------------------------------------------------------------------------------------------------------------------//


var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);

//Tony
//Franco
//Tony

//-----------------------------------------------------------------------------------------------------------------------//


var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

//The Flash
//Reverse Flash ==> como es un let este permite cambiar la variable pero solo dentro del scope, fuera vuelve a ser la declarada anteriormente
//The Flash
//Franco

//-----------------------------------------------------------------------------------------------------------------------//

6 / "3"   //2
"2" * "3"   // 6 
4 + 5 + "px"  //   9px
"$" + 4 + 5  //  $45
"4" - 2   //  2
"4px" - 2 // NaN
7 / 0  //  infinity
{}[0] // [0] PREGUNTAR
parseInt("09")// 9
5 && 2 // 2
2 && 5 // 5
5 || 0 //  5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] //true