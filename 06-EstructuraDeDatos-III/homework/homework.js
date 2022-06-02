"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/


class BinarySearchTree {
  constructor(value) {
    this.value = value; 
    this.right = null;
    this.left = null
  }
  size(){
    if(!(this.right)&&!(this.left)){return 1};
    if(this.right&&!(this.left)){return 1 + this.right.size()};
    if(this.left&&!(this.right)){return 1 + this.left.size()};
    if(this.right&&this.left){return 1 + this.left.size() + this.right.size()}
  };
  insert(value){
    if(this.value < value){
      if(this.right){
        this.right.insert(value)
      }else{
        this.right = new BinarySearchTree(value)
      }
    }else{
      if(this.left){
        this.left.insert(value)
      }else{
        this.left = new BinarySearchTree(value)
      }
    }    
  };
  contains(value){
    if(this.value === value){return true}
    else if(this.value<value && this.right){
      return this.right.contains(value)
    }else if(this.value>value && this.left){
      return this.left.contains(value)
    }else{
      return false}  
  };
  depthFirstForEach(cb,type){
    switch(type){
      case 'pre-order'://root-izq-der
        
        cb(this.value)
        if(this.left){this.left.depthFirstForEach(cb,type)}
        if(this.right){this.right.depthFirstForEach(cb,type)}
        break;
      
      case 'post-order'://izq-der-root
        if(this.left){this.left.depthFirstForEach(cb,type)}
        if(this.right){this.right.depthFirstForEach(cb,type)}
        cb(this.value)
        break;
      

      default://in-order  izq root der
        if(this.left){this.left.depthFirstForEach(cb,type)}
        cb(this.value)
        if(this.right){this.right.depthFirstForEach(cb,type)}
        break;}
  };
  breadthFirstForEach(cb,array=[]){
    cb(this.value)
    if(this.left){array.push(this.left)}
    if(this.right){array.push(this.right)}
    if(array.length){array.shift().breadthFirstForEach(cb,array)}
    }
  
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
