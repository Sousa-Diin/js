class Alerta {
    constructor(){
        this.tipo = '';
        this.placa = '';
        this.filial = '';
        this.hour = '00:00';
        this.auditoria = false;
    }

    insert(){
        alert('Adicionando...');
    }

    search(id){
        alert(`Buscando ID - ${id}`);
    }

    delete(id){
        alert(`Deletando ID - ${id}`);
    }

    save(){
        alert('Salvando os Dados');
    }

    clear(){
        alert('Limpando os Dados');
    }

    edit(){
        alert('Editando os Dados');
    }


}

var alerta = new Alerta();