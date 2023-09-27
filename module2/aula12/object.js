/* DATE: 11/09/2023 */

const documentoDeIdentidade = {
  name: "Wildes",
  lastName: "Sousa",
  cpf: "111.111.111-11",
  company: "IBM",
  age: 31,
};

/*  field  - campo chave para buscar objeto
    finder - elemento buscado value 
 */
function searchCoWorker(field, finder) {
  switch (field) {
    case "name":
      return finder === documentoDeIdentidade["name"]
        ? documentoDeIdentidade
        : null;
      break;
    case "lastName":
      return finder === documentoDeIdentidade["lastName"]
        ? documentoDeIdentidade
        : null;
      break;

    case "cpf":
      return finder === documentoDeIdentidade["cpf"]
        ? documentoDeIdentidade
        : null;
      break;

    case "age":
      return Number(finder) === documentoDeIdentidade["age"]
        ? documentoDeIdentidade
        : null;
      break;
    case "company":
      return finder === documentoDeIdentidade["company"]
        ? documentoDeIdentidade
        : null;
      break;
    default:
      const documentoDeIdentidade2 = new documentoDeIdentidade;
      documentoDeIdentidade2.name = null;
      documentoDeIdentidade2.lastName = undefined;
      documentoDeIdentidade2.cpf = "222.222.222-22";
      documentoDeIdentidade2.age = undefined;
      documentoDeIdentidade2.company = "Google";
      return documentoDeIdentidade2;
  }
}

console.log(searchCoWorker("age", "31"));
console.log(searchCoWorker("lastName", "Sousa"));
console.log(searchCoWorker("", "Sousa"));
console.log(searchCoWorker("name", "Wildes"));
