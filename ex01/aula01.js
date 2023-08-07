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

viewName(null)


