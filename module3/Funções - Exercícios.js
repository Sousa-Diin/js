//Resolução do exercício 1

function calcularMedia(nota1, nota2, nota3) {
  const mediaDasNotas = (nota1 + nota2 + nota3) / 3;
  console.log(`A média desse aluno é ${mediaDasNotas}`);
}

//Resolução do exercício 2
//Aqui começo com uma pequena adaptação da primeira resolução
function calcularMediaAdaptado(nota1, nota2, nota3) {
  const mediaDasNotas = (nota1 + nota2 + nota3) / 3;
  return mediaDasNotas;
}
function calcularMediaFinal(nota1, nota2, nota3, notaPf) {
  const mediaSemPf = calcularMediaAdaptado(nota1, nota2, nota3);
  const mediaFinal = (mediaSemPf + notaPf) / 2;
  console.log(`a média final desse aluno é ${mediaFinal}`);
}

//Resolução do exercício 3
function converterParaFarenheit(temperaturaCelsius) {
  const tempFarenheit = (9 / 5) * temperaturaCelsius + 32;
  console.log(
    `a temperatura correspondente em Farenheit é de ${tempFarenheit}ºF`
  );
}

//Resolução do exercício 4
function brunoTemQuePagarImposto(valorDaEtiqueta) {
  const valorComImposto = 1.08875 * valorDaEtiqueta;
  console.log(`O valor a ser pago é ${valorComImposto}`);
}
