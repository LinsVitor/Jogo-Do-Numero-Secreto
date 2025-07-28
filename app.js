let numeroSorteados = [];
let limiteMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function limparTexto() {
    chute = document.querySelector('input');
    chute.value = '';
}

function alterarTexto(tag, texto) {
    let alterar = document.querySelector(tag);
    alterar.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    //if ('speechSynthesis' in window) {
        //let utterance = new SpeechSynthesisUtterance(texto);
        //utterance.lang = 'pt-BR'; 
        //utterance.rate = 1.2; 
        //window.speechSynthesis.speak(utterance); 
    //} else {
        //console.log("Web Speech API não suportada neste navegador.");
    //}
}

function mensagemInicial() {
    alterarTexto('h1', 'Jogo do número secreto');
    alterarTexto('p', 'Escolha um número entre 1 a ' + limiteMax);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteMax + 1);
    let tamanhoDaLista = numeroSorteados.length;

    if (tamanhoDaLista == limiteMax) {
        numeroSorteados = []
    }

    if (numeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        numeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciar() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    limparTexto();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
    chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        alterarTexto('h1', 'Você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemContador = `Com ${tentativas} ${palavraTentativa}!`;
        alterarTexto('p', mensagemContador);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto) {
            alterarTexto('p', 'Seu número é maior');
        } else {
            alterarTexto('p', 'Seu número é menor');
        }
    }   limparTexto();
        tentativas++;
}

mensagemInicial();