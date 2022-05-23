'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var binStr = num.toString().split('').reverse();
  var numDec = 0;
  for(let i=0;i<binStr.length;i++){
    binStr[i] = binStr[i]*(2**i)
    binStr[i] = Math.pow(binStr[i],1)
  }
  for(let j=0;j<binStr.length;j++){
    numDec = numDec + binStr[j]
  }
  return numDec
}

function DecimalABinario(num) {
  // tu codigo aca
  var numCamb = num
  var arrBin = [];

  for(let i = 0 ; i >-1 ; i++){
    if(numCamb<1 && numCamb>0)
    { 
      var zarrBin = arrBin.reverse().join('')
      return zarrBin
    }
    var zz = Math.floor(numCamb%2)
    arrBin.push(zz)
    numCamb = numCamb/2
    
  }
   

}  


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}