function setNameLogin(name){
    var loginName = document.getElementById('login')
    loginName.style.color = "#fff"
    loginName.style.marginLeft = "65%"
    loginName.style.border = "2px #d2d2d2 solid "
    loginName.innerHTML = `Bem vindo ${name}`
    

    console.log(`Bem vindo ${name}`)
}

function getName(){
    var name = prompt('Olá operador qual seu nome por gentileza?')
   
    return name === "" || name === '&'? null : name
}


// Função Recursiva 
function viewName(name){
    if(name !== null){
        alert(`Olá ${name}`)
        setNameLogin(name)
    }else{
       name = getName()
       viewName(name)
    }
}

//viewName(null)

function countDuplicatesByKeys(array, key1, key2) {
    const counts = {};
    let count = 0;
  
    for (const item of array) {
      const keyValue1 = item[key1];
      const keyValue2 = item[key2];
      const keyPair = `${keyValue1}-${keyValue2}`;
       
      counts[keyPair] = (counts[keyPair] || 0) + 1;
      count = counts[keyPair];
    }

    return count;
  }
  
  // Exemplo de uso
  const data = [
    { name: 'Alice', age: 25, count: 0 },
/*{ name: 'Bob', age: 30, count: 0 },*/
    { name: 'Alice', age: 25, count: 0 },
    { name: 'Alice', age: 25, count: 0 },
    { name: 'Alice', age: 25, count: 0 }/*
    { name: 'Carol', age: 28, count: 0 },
    { name: 'Bob', age: 30, count: 0 }*/
  ];
  
  const result = countDuplicatesByKeys(data, 'name', 'age');

  //result = JSON.parse(result)

  alert(JSON.stringify(result,null,2))


  console.log('Count: ', result);

  



