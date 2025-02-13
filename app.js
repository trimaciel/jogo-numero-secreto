let listaDeNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial ();    
function verificarChute () {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }   
    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
            listaDeNumeroSorteados.push(numeroEscolhido);
            console.log(listaDeNumeroSorteados);
            return numeroEscolhido;
        }
    }git commit -m "

function limparCampo () {
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    limparCampo();
}