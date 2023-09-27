function calculateSquareRoot(radicand) {
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  console.log(`Input[0]: ${side1}\nInput[1]: ${side2}`);
  const sum = side1 ** 2 + side2 ** 2;
  return calculateSquareRoot(sum);
}


const inputDataList = process.argv.splice(2);
const myLength =  inputDataList.length
console.log("Size of list: ",myLength);
const side1 = inputDataList[0],
side2 = inputDataList[1];
 

//console.log("Conversão", getTerminalInput(4));

//console.log(calculateSquareRoot(144));

console.log(
  `A hipotenusa de um triangulo com lados 3 e 4 é: ${calculatePythagoras(
    side1,
    side2
  )}`
);
//console.log(process.argv);
