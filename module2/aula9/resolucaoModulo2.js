console.log('Resultado do exercício 1');

const primeiraVariavel = 2148;
let segundaVariavel;

console.log(`O valor da primeira variável é ${primeiraVariavel}`);

segundaVariavel = 23;

console.log(`Minha segunda variável vale ${segundaVariavel}`);
console.log(
  `O valor da soma das minhas duas variáveis é ${
    primeiraVariavel + segundaVariavel
  }`
);
segundaVariavel = segundaVariavel ** 2;
console.log(segundaVariavel);
segundaVariavel = segundaVariavel / 3;
console.log(segundaVariavel);

console.log('Resultado do exercício 2');

const booleana1 = true;
const booleana2 = false;

console.log(`Operação AND entre as duas variáveis: ${booleana1 && booleana2}`);
console.log(`Operação OR entre as duas variáveis: ${booleana1 || booleana2}`);

const booleana3 = false;

console.log(
  `Operação AND entre as três variáveis: ${booleana1 && booleana2 && booleana3}`
);
console.log(
  `Operação OR entre as três variáveis: ${booleana1 || booleana2 || booleana3}`
);
