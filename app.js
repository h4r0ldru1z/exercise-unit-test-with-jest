const sum= (a,b)=>{
    return a+b
}

console.log(sum(7,3));


const fromEuroToDollar = function(valueInEuro){
// convertimos el valor a dolares
let valueInDollar = valueInEuro * 1.2;
// retornamos el valor
return valueInDollar;
};

const fromDollartoYen=function(value){
    let valueinYen=(value)*106.58;
    return valueinYen;
}

const fromYenToPound = function(value){
    // convertimos el valor a dolares
    let valueInPound = (value)*0.00625;
    // retornamos el valor
    return Number(valueInPound.toFixed(5));
}

module.exports={sum , fromEuroToDollar ,fromDollartoYen, fromYenToPound }