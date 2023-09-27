/* 11/09/2023*/

const listNumeric = [1, 2, 3, 4, 5];

const pokemon = {
  nome: "bumosauro",
  estamina: "aladi",
  defesa: "redemuinho",
  ataque: "acquaPower",
  habilidade: "waterConrol",
};

console.log(listNumeric);

console.log(`O elemento 2 da minha lista é - [${listNumeric[2]}]`);

console.log(
  `Meu pokemon ${pokemon.nome} possui: 
  \n"estamina" -  ${pokemon["estamina"]};
  \n"defesa" - ${pokemon.defesa};
  \n"ataque" - ${pokemon.ataque};
  \n"habilidade" - ${pokemon.habilidade};\n`
);

pokemon.habit = "civil";

console.log(pokemon);

//### 3

let num1 = 9;
let num2 = 15;

console.log(`
    A soma de ${num1} + ${num2} é = ${num1 + num2}
`);

console.log(`
    A Subtração de ${num1} - ${num2} é = ${num1 - num2}
`);

console.log(`
    A Multiplicação de ${num1} x ${num2} é = ${num1 * num2}
`);

console.log(`
    A Divisão entre  ${num1} / ${num2} é = ${num1 / num2}
`);

console.log(`
    O resultado de ${num2} elevado a ${num1} é = ${(num2 ** num1)}
`);