// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener('deviceready', onDeviceReady, false);

let mensagem = null;
let msgInformada = null;


function onDeviceReady() {

    document.getElementById('exibeMensagem').addEventListener('click', exibirMensagem)
    mensagem = document.getElementById('mensagem')
    msgInformada = document.getElementById('msgInformada')
    
}

function exibirMensagem(){
    mensagem.innerHTML =  msgInformada.value
}
