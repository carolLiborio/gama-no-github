/*


*/

// if-else

const cores = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const status1 = 'success';
const status2 = 'warning';
const status3 = 'error';

var mensagem = 'qualquer texto de status';
var input = document.getElementById('tipoMensagem');


input.addEventListener('input', () => {
    let status = input.value;
    if(status === status1){
        console.log(`%c ${mensagem}`, `background:${cores.GREEN}`);
    }else if(status === status2){
        
        console.log(`%c ${mensagem}`, `background:${cores.YELLOW}`);
    }else if(status === status3){
        
        console.log(`%c ${mensagem}`, `background:${cores.RED}`);
    }
})



//switch
input.addEventListener('input', () => {
   let _status = input.value;
    switch (_status) {
        case  status1:
            console.log(`%c ${mensagem}`, `background:${cores.GREEN}`);
            break;
        case  status2:
            console.log(`%c ${mensagem}`, `background:${cores.YELLOW}`);
            break;
        case  status3:
            console.log(`%c ${mensagem}`, `background:${cores.RED}`);
            break;
    }
})
