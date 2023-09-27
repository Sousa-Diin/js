class alert {}
export default alert;
//////////////////////*CLASSE ALERTA*\\\\\\\\\\\\\\\\\\\\\\\\\

class Alerta {
  constructor() {
    this.id = 1;
    this.audit = false;
    this.arrayAlerts = [];
    this.arrayAudit = [];
  }

  search(id) {
    alert(`Buscando ID - ${id}`);
  }

  delete(id) {
    alert(`Deletando ID - ${id}`);
  }

  save() {
    let myalert = this.readData();
    if (this.checkField(myalert)) {
      this.addAlert(myalert);
    }
    // this.addAlert(alert);
  }

  saveLocalStorage() {
    let myalert = this.readData();

    if (localStorage.myArray) {
      this.arrayAlerts = JSON.parse(localStorage.getItem("myArray"));
      //this.id = localStorage.getItem('myArray').id;
      console.log('Atualiza "ID": ', this.id);
    }

    if (this.checkField(myalert)) {
      let newItem = myalert;
      this.addAlert(newItem);
      //this.id++;
    }
    localStorage.myArray = JSON.stringify(this.arrayAlerts);
  }

  clear() {
    alert("Limpando os Dados");
  }

  edit() {
    alert("Editando os Dados");
    //let siderBar = document.getElementById('siderBar');
  }

  addAlert(myalert) {
    this.arrayAlerts.push(myalert);
    this.id++;
    console.log(`Objeto: ${JSON.stringify(myalert)}`);
    //console.log('Array: ', this.arrayAlerts);
  }

  readData() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    var warning = {}; // recebe obj vazio in start

    warning.id = this.id;
    warning.type = document.getElementById("autocomplete-alerta").value;
    warning.licensePlate = document.getElementById("placa").value;
    warning.operation = document.getElementById("autocomplete-filial").value;
    warning.yawn = document.getElementById("qtd_bocejo").value;
    warning.myHour = `${hour}:${minutes}`;
    warning.audit = this.audit;
    warning.date = currentDate;
    
    warning.type = warning.type.toUpperCase();
    warning.licensePlate = warning.licensePlate.toUpperCase();
    warning.operation = warning.operation.toUpperCase();
    warning.yawn = warning.yawn.toUpperCase();

    /*var rp = this.countDuplicatesByKeys('type', 'licensePlate');
    alert(`Repetição: ${JSON.stringify(rp,null,2)}`);*/

    return warning;
  }

  checkField(myalert) {
    let myMsg = "";

    if (myalert.type === "") {
      myMsg += "- Informe o tipo do alerta.\n";
    }
    if (myalert.licensePlate === "") {
      myMsg += "- Informe a placa do veículo.\n";
    }
    if (myalert.operation === "") {
      myMsg += "- Informe o nome da filial.\n";
    }

    if (myMsg != "") {
      alert(myMsg);
      return false;
    }

    return true;
  }

  menu() {
    alert("Abrindo menu..");
  }

  countDuplicatesByKeys(key1, key2) {
    let array = /*this.arrayAlerts*/ carregarDados();
    const counts = {};
    let count = 1;

    for (const item of array) {
      const keyValue1 = item[key1];
      const keyValue2 = item[key2];
      const keyPair = `${keyValue1}-${keyValue2}`;

      counts[keyPair] = (counts[keyPair] || 0) + 1;
      count = counts[keyPair];
    }

    return counts;
  }

  showAudit() {
    if (localStorage.audit) {
      this.arrayAudit = JSON.parse(localStorage.getItem("audit"));
    }

    localStorage.audit = JSON.stringify(this.arrayAudit, null, 3);
    document.getElementById("myAudit").innerHTML = this.arrayAudit;
  }
}

var myAudit = 0;

//localStorage.setItem('audit', myAudit); 25/08/2023
var objAlerta = new Alerta();

objAlerta.showAudit();

let placa = "XXXXX",
  _alerta = "????",
  filial = "----",
  qtd_bocejo = 1;

let myPlaca = `${placa}`,
  myAlerta = `${_alerta}`,
  myFilial = `${filial}`,
  myQtdBocejo = `${qtd_bocejo}`;

var enviar = false;
const alerta = {
  bocejo:
    "Evento de Bocejo, conforme segue foto abaixo. " +
    "Motorista bocejando diversas vezes, aparentando sonolência. \n\n" +
    "Favor verificar a condição do motorista, para seguir viagem.\n\n",
  FadigaN1:
    "Evento de Fadiga N1, conforme segue foto abaixo.\n\n" +
    "Favor comunicar, instruir e solicitar a parada do motorista por 30 minutos em um local seguro.\n\n",
  FadigaN2:
    "Evento de Fadiga N2, conforme segue foto abaixo.\n\n" +
    "Favor comunicar, instruir e solicitar a parada do motorista por 60 minutos em um local seguro.\n\n",
  atencao:
    "Evento de Atenção, conforme segue foto abaixo. " +
    "Motorista desviando a atenção durante a condução.\n\n " +
    "Favor comunicar, instruir e Tratar junto ao responsável.\n\n",
  ausencia:
    "Evento de Ausência, conforme segue foto abaixo. " +
    "Favor solicitar Reposicionamento da câmera.\n\n" +
    "Motorista desviando seu rosto do foco da câmera.\n\n",
  celular:
    "Evento de utilização de Celular, conforme segue foto abaixo.\n" +
    "Favor comunicar, instruir e tratar junto ao responsável.\n" +
    "De acordo com o artigo 252 do Código de Trânsito Brasileiro (CTB), é proibido usar o celular ao volante," +
    "mesmo com os fones de ouvido.",
  cameraCoberta:
    "Evento de Câmera Coberta, conforme segue foto abaixo.\n" +
    "Favor comunicar, instruir desobstrução da Câmera e Tratar junto ao responsável. ",
  cigarro:
    "Evento de Cigarro, conforme segue foto abaixo.\n" +
    "Motorista infringindo as normas da empresa.\n" +
    "Favor comunicar, instruir e tratar junto ao responsável.",
  gestoObceno:
    "Evento de Atenção, conforme segue foto abaixo.\n" +
    "Motorista fazendo gestos obscenos.\n\n" +
    "Favor comunicar, instruir e tratar junto ao responsável. ",
  palavraBC:
    "Evento de Atenção, conforme segue foto abaixo." +
    "Motorista citando palavras de baixo calão.\n\n" +
    "Favor comunicar, instruir e tratar junto ao responsável. ",
  semCinto:
    "Evento de Atenção, Conforme segue foto abaixo.\n\n" +
    "Motorista não está utilizando o cinto de segurança.\n\n" +
    "Favor comunicar, instruir a utilização do Cinto e tratar junto ao responsável.\n\n" +
    "Art. 167\n" +
    "Deixar o condutor de usar o cinto de segurança, conforme previsto no art. 65:\n" +
    "Infração – grave;\n" +
    "Penalidade – multa - R$ 195,23 e 5 pontos;\n" +
    "Medida administrativa - retenção do veículo até colocação do cinto pelo infrator.\n",
  undefined: "O tipo de alerta não existe. ",
};

/*
    Ajsute tecnico para usar no e-mail Outlook
*/

const email = {
  anglo: {
    group: `bernardo@expressonepomuceno.com.br
brunocosta@expressonepomuceno.com.br
diegoferrara@expressonepomuceno.com.br 
guilhermesouza@expressonepomuceno.com.br
gustavobarbosa@expressonepomuceno.com.br 
kamillaborges@expressonepomuceno.com.br
 lindomarpedroso@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
 robsoncandeia@expressonepomuceno.com.br
 rogeriosilva@expressonepomuceno.com.br
  wemersondrumond@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  bracell: {
    group: `guilhermesouza@expressonepomuceno.com.br
gridbracell@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
odairjose@expressonepomuceno.com.br
uadsonbittencourt@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
guilhermeferracini@expressonepomuceno.com.br
demetriojunior@expressonepomuceno.com.br
pauloroberto@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  cenibra: {
    group: `alberonerodrigues@expressonepomuceno.com.br
anaclaudia@expressonepomuceno.com.br
aprendizdecamcnb@expressonepomuceno.com.br
cesardias@expressonepomuceno.com.br
julialima@expressonepomuceno.com.br
leilapereira@expressonepomuceno.com.br
leticiaoliveira@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
verlanemachado@expressonepomuceno.com.br
wasnhingtonluiz@expressonepomuceno.com.br
wesleyamorin@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
rafaelcosta@expressonepomuceno.com.br
tatiane.almeida@expressonepomuceno.com.br
kaironcoelho@expressonepomuceno.com.br
elisianerodrigues@expressonepomuceno.com.br
wilsonsilva@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  cmpc: {
    group: `andrienigoulart@expressonepomuceno.com.br 
cristianopedroso@expressonepomuceno.com.br
joaopaulo@expressonepomuceno.com.br
logisticaguaiba@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
ubirajaracruz@expressonepomuceno.com.br
yurisilva@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  costaRica: {
    group: `alecksandersilva@expressonepomuceno.com.br
cesareler@expressonepomuceno.com.br
cristhianmelo@expressonepomuceno.com.br
fabianasantos@expressonepomuceno.com.br
luizferreira@expressonepomuceno.com.br
marciooliveira@expressonepomuceno.com.br
marcosvaz@expressonepomuceno.com.br
maurosoares@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
pauloroberto@expressonepomuceno.com.br
wellingtonesiquio@expressonepomuceno.com.br
ccocostarica@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
danielfaria@expressonepomuceno.com.br
luizdantas@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  furlan: {
    group: `guilhermesouza@expressonepomuceno.com.br
julionascimento@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
setorcontrole@expressonepomuceno.com.br
rafael.alcantara@expressonepomuceno.com.br
oliviomartins@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
pauloroberto@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  aracruz: {
    group: `carinasouza@expressonepomuceno.com.br
cpmaracruz@expressonepomuceno.com.br
gestaofadigaaracruz@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
wesleygregorio@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
andrebrito@expressonepomuceno.com.br
antoniomezarde@expressonepomuceno.com.br
tatiane.almeida@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  limeira: {
    group: `guilhermesouza@expressonepomuceno.com.br
brunosantos@expressonepomuceno.com.br
 millareis@expressonepomuceno.com.br
odairjose@expressonepomuceno.com.br 
pauloroberto@expressonepomuceno.com.br
ryllarypaulo@expressonepomuceno.com.br
josepadela@expressonepomuceno.com.br
operacaolimeira@expressonepomuceno.com.br 
wemersondrumond@expressonepomuceno.com.br
viniciuscontesini@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  seteLagoas: {
    group: `alicesantos@expressonepomuceno.com.br
cpmdesvios@expressonepomuceno.com.br
cpmsuzanosetelagoas@expressonepomuceno.com.br
grazielamelo@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
deborasouza@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
marcossouza@expressonepomuceno.com.br
flaviocunha@expressonepomuceno.com.br
kaironcoelho@expressonepomuceno.com.br
tatiane.almeida@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  mmi: {
    group: `andrerezende@expressonepomuceno.com.br
tatiane.almeida@expressonepomuceno.com.br
edersonoliveira@expressonepomuceno.com.br
sidneyrossetti@expressonepomuceno.com.br
rilenovalentim@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
bernardo@expressonepomuceno.com.br
ccommi@expressonepomuceno.com.br
anaavelino@expressonepomuceno.com.br
jonathanviana@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  tresLagoas: {
    group: `alexkovacs@expressonepomuceno.com.br
danielamercadante@expressonepomuceno.com.br
grid_ts2@expressonepomuceno.com.br
guilhermeferracini@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
pauloroberto@expressonepomuceno.com.br
silvanovieira@expressonepomuceno.com.br
leandrozillmer@expressonepomuceno.com.br
heitorreis@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
matheusrezende@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
  zilor: {
    group: `rafael.alcantara@expressonepomuceno.com.br
eduardosalioni@expressonepomuceno.com.br
pedrocosta@expressonepomuceno.com.br
trafegozilor@expressonepomuceno.com.br
julionascimento@expressonepomuceno.com.br
guilhermesouza@expressonepomuceno.com.br
millareis@expressonepomuceno.com.br
wemersondrumond@expressonepomuceno.com.br
pauloroberto@expressonepomuceno.com.br
`,
    assunto: "Alerta CCI Fadiga",
  },
};

function chooseEmail(op) {
  //var destinatario = {};
  switch (op) {
    case "Anglo":
      document.getElementById(
        "fdest"
      ).innerHTML = `${email.anglo.assunto} - ${op}`;
      break;
    case "Aracruz":
      document.getElementById(
        "fdest"
      ).innerHTML = `${email.aracruz.assunto} - ${op}`;
      break;
    case "Bracell":
      document.getElementById("fdest").innerHTML = `${
        email.bracell.assunto
      } - ${op.toUpperCase()}`;
      break;
    case "Cenibra":
      document.getElementById("fdest").innerHTML = `${
        email.cenibra.assunto
      } - ${op.toUpperCase()}`;
      break;
    case "Cmpc":
      document.getElementById("fdest").innerHTML = `${
        email.cmpc.assunto
      } - ${op.toUpperCase()}`;
      break;
    case "Costa Rica":
      document.getElementById(
        "fdest"
      ).innerHTML = `${email.costaRica.assunto} - ${op}`;
      break;
    case "Furlan":
      document.getElementById(
        "fdest"
      ).innerHTML = `${email.furlan.assunto} - ${op}`;
      break;
    case "Limeira":
      document.getElementById(
        "fdest"
      ).innerHTML = `${email.limeira.assunto} - ${op}`;
      break;
    case "MMI":
      document.getElementById("fdest").innerHTML = `${
        email.mmi.assunto
      } - ${op.toUpperCase()}`;
      break;
    case "Sete Lagoas":
      document.getElementById(
        "fdest"
      ).innerHTML = `${email.seteLagoas.assunto} - ${op}`;
      break;
    case "Três Lagoas":
      document.getElementById(
        "fdest"
      ).innerHTML = `${email.tresLagoas.assunto} - ${op}`;
      break;
    case "Rodoviário":
      document.getElementById("fdest").innerHTML = "sem email";
      break;
    case "Zilor":
      document.getElementById(
        "fdest"
      ).innerHTML = `${email.zilor.assunto} - ${op}`;
      break;
  }
}

function limparCampos() {
  let apagar = confirm(
    "Tem certeza que deseja apagar todos os campos preechidos?"
  );
  if (apagar) {
    document.getElementById("autocomplete-alerta").value = "";
    document.getElementById("placa").value = "";
    document.getElementById("autocomplete-filial").value = "";
    document.getElementById("qtd_bocejo").value = "";
    document.getElementById("fassunto").innerHTML = "";
    document.getElementById("fdest").innerHTML = "";
    document.getElementById("message-goawake").innerHTML = "";
    document.getElementById("message-email").innerHTML = "";
  }
  document.getElementById("message-goawake").innerHTML = "Observações";
  document.getElementById("message-email").innerHTML = "Display message";
}

function apagarTodosDadosDisplay() {
  const btnLimparCampos = document.getElementById("limparCampos");
  btnLimparCampos.addEventListener("click", limparCampos);
}
// Verifica se o LocalStorage é suportado pelo navegador
function isLocalStorageSupported() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
}
// Carrega os dados do LocalStorage ou define dados iniciais
function carregarDados() {
  var alertas;

  if (isLocalStorageSupported()) {
    var dadosJSON = localStorage.getItem("myArray");
    if (dadosJSON) {
      alertas = JSON.parse(dadosJSON);
    } else {
      alertas = []; //OBJ VAZIO
    }
  } else {
    alertas = [{}]; //OBJ VAZIO
  }

  return alertas;
}

// Salva os dados no LocalStorage
function salvarDados(myKey, value) {
  if (isLocalStorageSupported()) {
    var dadosJSON = JSON.stringify(value);
    localStorage.setItem(myKey, dadosJSON);
  }
}

// Exibir os dados
function exibirDados(dados) {
  var display = document.getElementById("alerta-display");
  display.textContent = JSON.stringify(dados, null, 3);
}

//  Atualiza dados
function upDate(dados, index, content) {
  dados[index] = content;
}

// Consultar dados pela placa
function consultarPorPlaca(dados, placa) {
  var resultado = dados.filter(function (item) {
    return item.placa === placa;
  });

  return null;
}

// Consultar dados pela idade
function isPlaca(dados, placa) {
  var resultado = dados.some(function (item) {
    return item.placa === placa;
  });

  return resultado;
}

//  Faz a busca no arquivo json e incrementa qtd de bocejo
function getQtdBocejo(dados, placa) {
  if (isPlaca(dados, placa)) {
    var qtd = dados[3].qtd_bocejos;
  }
  return qtd;
}

// Adicionar novo dado
function adicionarDado(dados, dado) {
  dados.push(dado);
}

// Função para remover dado por placa
function removerDadoPorAlertaPlaca(dados, alerta) {
  dados = dados.filter(function (item) {
    return item.alerta !== alerta;
    console.log("item removido da funçaõ [removerDadoPorAlertaPlaca]");
  });
}

// Gerar um novo dado
function createDado(dados, alerta, placa, filial, qtd, horario) {
  var newDado = {
    alerta: alerta,
    placa: placa,
    filial: filial,
    qtd_bocejo: qtd,
    horario: horario,
  };
  adicionarDado(dados, newDado);
}

function msg() {
  var dataAtual = new Date();
  var hora = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();

  var alt = document.getElementById("autocomplete-alerta").value;
  _alerta = alt;
  auxAlt = alt; //removeSpecialCharSimple(alt);
  placa = document.getElementById("placa").value;
  filial = document.getElementById("autocomplete-filial").value;
  qtd_bocejo = document.getElementById("qtd_bocejo").value;

  var auxEmail = filial;
  alt = alt.toUpperCase();
  placa = placa.toUpperCase();
  filial = filial.toUpperCase();
  qtd_bocejo = qtd_bocejo.toUpperCase();

  var dados = carregarDados();
  var hr = `${hora}:${minutos}`;

  // createDado(dados, alt , placa, filial, qtd_bocejo, hr);
  //var myDados = JSON.parse(dados);

  //console.log('Quantidade: ', rp);
  if (auxAlt === "Bocejo") {
    var rp = objAlerta.countDuplicatesByKeys("type", "licensePlate");
    alert(`Repetição: ${JSON.stringify(rp, null, 2)}`);
    if (qtd_bocejo < 3) {
      document.getElementById("message-email").innerHTML =
        "BOCEJO -> Sempre enviar após a 3ª ocorrência dentro do turno com o Comunicado de Alerta;";
      document.getElementById("message-goawake").innerHTML =
        "Monitorado, motorista bocejando.";

      enviar = true;
    } else {
      document.getElementById("message-email").innerHTML = `${getSaudacao()}${
        alerta.bocejo
      }`;
      document.getElementById("message-goawake").innerHTML =
        "Reportado para a operação. Motorista bocejando, apresentando sinais de sonolência. ";
      document.getElementById(
        "fassunto"
      ).innerHTML = `ALERTA FOCUS - BOCEJO / ${placa} - ${filial}`;
      //document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;
      chooseEmail(auxEmail);
      enviar = true;
    }
  } else if (auxAlt === "Sonolência N1") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.FadigaN1
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado para Reportado para a operação. Motorista apresentando sonolência. Realizar a parada de 30 minutos. Em local seguro.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - FADIGA N1 / ${placa} - ${filial}`;
    /*document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    alert("Lembrar de extrair o PDF", placa);
    enviar = true;
    // objAlerta.showAudit(); 25/08/2023
  } else if (auxAlt === "Sonolência N2") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.FadigaN2
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado para a operação. Motorista apresentando sonolência. Realizar a parada de 60 minutos. Em local seguro.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - FADIGA N2 / ${placa} - ${filial}`;
    /* document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    enviar = true;
    //objAlerta.showAudit(); 25/08/2023
  } else if (auxAlt === "Atenção") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.atencao
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado. Motorista desviando a atenção durante a condução.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - ATENÇÃO / ${placa} - ${filial}`;
    /*document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    enviar = true;
  } else if (auxAlt === "Ausência") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.ausencia
    }`;
    document.getElementById("message-goawake").innerHTML = `
            Monitorado. Câmera deslocada.\n
            Reportado para a operação. Câmera deslocada/desajustada.\n
            Reportado para a operação. Câmera coberta, sem visualização de imagens.\n\n
            Monitorado. Câmera desajustada.
            Reportado para a operação. Câmera deslocada.
            Reportado para a operação. Câmera desajustada.
            Reportado para a operação. Motorista desviando seu rosto do foco da câmera.
            Reportado para a operação. Motorista fora da cabine. `;
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - AUSÊNCIA / ${placa} - ${filial}`;
    /* document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    enviar = true;
  } else if (auxAlt === "Celular") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.celular
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado para a operação. Motorista utilizando celular durante sua condução. Infringindo as normas da Empresa.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - CELULAR / ${placa} - ${filial}`;
    /*document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    enviar = true;
  } else if (auxAlt === "Câmera Coberta") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.cameraCoberta
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado para a operação. Câmera coberta, sem visualização de imagens.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - CÂMERA COBERTA / ${placa} - ${filial}`;
    /*document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    enviar = true;
  } else if (auxAlt === "Cigarro") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.cigarro
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado para a operação. Motorista fumando durante sua condução. Infringindo as normas da Empresa.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - CIGARRO / ${placa} - ${filial}`;
    /*document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    enviar = true;
  } else if (auxAlt === "Gesto Obceno") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.gestoObceno
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado para a operação. Motorista fazendo gestos obscenos.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - GESTO OBCENO / ${placa} - ${filial}`;
    /*document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(filial);
    enviar = true;
  } else if (auxAlt === "Palavra de Baixo Calão") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.palavraBC
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado para a operação. Motorista citando palavras de baixo calão.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - ATENÇÃO / ${placa} - ${filial}`;
    /*document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    enviar = true;
  } else if (auxAlt === "Sem Cinto") {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.semCinto
    }`;
    document.getElementById("message-goawake").innerHTML =
      "Reportado para a operação. Motorista não está utilizando o cinto de segurança.";
    document.getElementById(
      "fassunto"
    ).innerHTML = `ALERTA FOCUS - ATENÇÃO / ${placa} - ${filial}`;
    /*document.getElementById('fdest').innerHTML = `ALERTA FOCUS ${filial} <ALERTA FOCUS ${filial}>`;*/
    chooseEmail(auxEmail);
    enviar = true;
  } else if (alerta == "" || placa == "" || filial == "" || qtd_bocejo == "") {
    alert("Entre com dados validos");
    enviar = false;
  } else {
    document.getElementById("message-email").innerHTML = `${getSaudacao()}${
      alerta.undefined
    }`;
    document.getElementById("message-goawake").innerHTML =
      "alerta undefined, sem messagem.";
    enviar = false;
  }
  if (enviar) {
    createDado(dados, alt, placa, filial, qtd_bocejo, hr);
    salvarDados("newData", objAlerta.arrayAlerts); // TESTE DA FUNÇÂO
    objAlerta.saveLocalStorage();
  }

  // Limpa os campos da tratativas
  document.getElementById("autocomplete-alerta").value = "";
  document.getElementById("placa").value = "";
  document.getElementById("autocomplete-filial").value = "";
  exibirDados(dados);
}

function exibirHorarioAtual() {
  var dataAtual = new Date();
  var hora = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var segundos = dataAtual.getSeconds();

  var myUser = JSON.parse(localStorage.getItem("user"));

  // Formatação do horário com zero à esquerda se necessário
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  if ((hora == myUser.lunchTime.hour) & (minutos == myUser.lunchTime.minute)) {
    alert(
      "Este é um lembrete de,\n \tHora de JANTA!\n\nAVISO: após 1mim o controle da página retornará pra você."
    );
    console.log("Teste", myUser.lunchTime);
  }
  if ((hora == 18) & (minutos <= 15)) {
    document.getElementById("message-email").innerHTML =
      "Boa noite! Wildes do *CCI* - Fadiga, operando ate as 06:00hr.";
  }

  var horarioAtual = hora + ":" + minutos + ":" + segundos;
  //document.getElementById("data").textContent = horarioAtual;
}

// Chamar a função para exibir o horário atual a cada segundo

setInterval(exibirHorarioAtual, 1000);

function getSaudacao() {
  const data = new Date();

  const horaDoDia = data.getHours();
  let minute = data.getMinutes();
  let saudacao = "";

  if (horaDoDia >= 6 && horaDoDia < 12) {
    console.log("Bom dia!!");
    saudacao = "Prezados, Bom dia!\n\n";
  } else if (horaDoDia >= 12 && horaDoDia < 18) {
    console.log("Boa tarde!!");
    saudacao = "Prezados, Boa tarde!\n\n";
  } else if (horaDoDia >= 18 && horaDoDia < 24) {
    console.log("Boa Noite!!", horaDoDia);
    saudacao = "Prezados, Boa noite!\n\n";
    paterPonto(horaDoDia, minute);
  } else {
    console.log("Boa Madrugada!!", horaDoDia);
    saudacao = "Prezados, Bom dia!\n\n";
  }

  return saudacao;
}

getSaudacao();

function paterPonto() {
  var dataAtual = new Date();
  var hora = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();

  console.log(`${hora} : ${minutos}`);

  if (hora == 20 && minutos == 58) {
    alert("Olá Operador este é um lembrete para bater o ponto!");
    console.log("Bater ponto");
    // return true;
  } else if ((hora == 0) & (minutos == 0)) {
    alert(
      "Olá Operador este é um lembrete para fazer uma pausa (break for eat)!"
    );
  }
  //return false;
}

function verificarRepeticao(relatorio, placa) {
  var qtd = 0;
  var resultados = relatorio.filter(function (item) {
    return item;
  });

  resultados.forEach(function (item) {
    if (item.placa === placa) {
      qtd += 1;
      console.log("repetição: ", qtd);
    }
  });

  return qtd;
}

function copyToClickBoard(dado) {
  var content = document.getElementById(dado).innerHTML;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });

  //content.style.backgroundColor = 'blue';
  //content.style.color = '#fff';
}

function handleAutoComplete(id, op) {
  // Adiciona um evento de input no campo de entrada com autocomplete
  document.getElementById(id).addEventListener("input", function () {
    var inputVal = this.value;
    var options = document.getElementById(op);

    // Verifica se a entrada corresponde a alguma opção
    for (var i = 0; i < options.length; i++) {
      var optionVal = options[i].value;
      if ((i < 4) & (optionVal.toLowerCase() === inputVal.toLowerCase())) {
        this.value = optionVal;
        console.log(`Valor selecionado: ${this.value}`);
      }
    }
    //e.prevent.default();
  });
}

function fecharPagina() {
  // Fecha a página atual
  window.location.pathname = "index.html";
}

function myLink(link) {
  switch (link) {
    case "audit":
      window.location.pathname = "src/upgrade/v1.0.3.html";
      break;
    case "profile":
      window.location.pathname = "src/upgrade/aula01.html";
      break;
    case "settings":
      window.location.pathname = "#";
      alert("Sorry, this command is not yet available");
      break;
    case "record":
      window.location.pathname = "src/pages/record.html";
      break;
    case "logout":
      window.location.pathname = "../index.html";
      break;
    case "download":
      gerarJSONeDownload();
      break;
    default:
      window.location.pathname = "/";
      break;
  }
}

function gerarJSONeDownload() {
  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1;

  // Converter o JSON para CSV usando a biblioteca PapaParse
  var relatorio = false;
  var csv = "";
  if (csv === "" && !relatorio) {
    alert(
      "Acess denield.\n\nSorry, to be continue with this action please, to do your log in."
    );
  } else {
    csv = Papa.unparse(relatorio);

    // Criar um novo Blob com o conteúdo CSV
    var blob = new Blob([csv], { type: "text/csv;charset=utf-8" });

    // Nome do arquivo Excel que será baixado
    var nomeArquivo = `dados_systrat${dia}-${mes}.csv`;
    console.log(`Dowonload arqSysTrat: ${dia}-${mes}`);
    // Fazer o download do arquivo Excel usando a biblioteca FileSaver
    saveAs(blob, nomeArquivo);
  }
}

// Função para atualizar os dados armazenados no localStorage
function atualizar(dados, placa) {
  // Procurar o índice do objeto que possui o nome informado
  var index = dados.findIndex(function (item) {
    return item.placa === placa;
  });

  // Se o objeto foi encontrado, atualizar seus dados
  if (index !== -1) {
    dados[index].qtd_bocejo;

    // Armazenar os dados atualizados no localStorage
    // salvarDados( 'oldData',dados);
  }
}

function deletar(dados, placa) {
  // Filtrar os dados, removendo o objeto com o nome informado
  var dadosAtualizados = dados.filter(function (item) {
    return item.placa !== placa;
  });

  // Armazenar os dados atualizados no localStorage
  salvarDados("oldData", dadosAtualizados);
}

function show() {
  var themes = document.getElementById("div-themes");
  themes.style.display = "visibility";
}
function getUser(op) {
  const user = {
    name: "Wildes Sousa",
    avatar: "",
    lunchTime: {
      hour: 20,
      minute: 58,
    },
  };
  localStorage.setItem("user", JSON.stringify(user, null, 2));
  var myUser = JSON.parse(localStorage.getItem("user"));

  switch (op) {
    case "name":
      return myUser.name;
      break;
    case "avatar":
      return myUser.avatar;
      break;
    case "break":
      return myUser.lunchTime;
      break;
    default:
      return null;
  }
}

function user(op) {
  document.getElementById("login-name").innerHTML = getUser(op);
}

user("name");
apagarTodosDadosDisplay();
