const object = [
  {
    type: "ATENÇÃO",
    licensePlate: "AAA444",
    id: 1,
    operation: "ARACRUZ",
    yawn: "",
    myHour: "15:24",
    audit: false,
    date: "Thu Sep 14 2023",
  },
  {
    type: "ATENÇÃO",
    licensePlate: "784512",
    id: 2,
    operation: "FURLAN",
    yawn: "",
    myHour: "15:25",
    audit: false,
    date: "Thu Sep 14 2023",
  },
  {
    type: "AUSÊNCIA",
    licensePlate: "784512",
    id: 3,
    operation: "TRÊS LAGOAS",
    yawn: "",
    myHour: "15:26",
    audit: false,
    date: "Thu Sep 14 2023",
  },
  {
    type: "BOCEJO",
    licensePlate: "AAA444",
    id: 4,
    operation: "ARACRUZ",
    yawn: "",
    myHour: "15:24",
    audit: false,
    date: "Thu Sep 14 2023",
  },
  {
    type: "ATENÇÃO",
    licensePlate: "784512",
    id: 5,
    operation: "FURLAN",
    yawn: "",
    myHour: "15:25",
    audit: false,
    date: "Thu Sep 14 2023",
  },
  {
    type: "BOCEJO",
    licensePlate: "784512",
    id: 6,
    operation: "TRÊS LAGOAS",
    yawn: "",
    myHour: "15:26",
    audit: false,
    date: "Thu Sep 14 2023",
  },
  {
    type: "BOCEJO",
    licensePlate: "AAA444",
    id: 7,
    operation: "ARACRUZ",
    yawn: "",
    myHour: "15:24",
    audit: false,
    date: "Thu Sep 14 2023",
  },
];

const idQuantidadeDeAlertas = object ?? {};

function showAtDiplay(element) {
  console.log(element);
}

function formatString(list) {
  let tam = list.length;
  list.forEach((obj) => {
    showAtDiplay(
      `${obj.id} - ${obj.type}  | ${obj.licensePlate} | ${obj.operation} | ${obj.yawn} | ${obj.myHour} | ${obj.audit} | ${obj.date}`
    );
  });
  console.log(`Tamanho da lista: [${tam}]\n`);
}

const listType = object.filter(function (item) {
  return item.type === "BOCEJO";
});

const listMap = listType.map(function (item) {
  return item.licensePlate;
});

//showAtDiplay(object);
formatString(object);
formatString(listType);
console.log(listMap);