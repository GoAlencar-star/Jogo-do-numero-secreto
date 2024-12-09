let listaDeNumerosSorteados = [];
let limiteN = 10; 
let nn = gerarNumeroSecreto();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto!');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10!');
}
mensagemInicial();

function verificarChute() {
    console.log(nn);
    let chute = document.querySelector('input').value;
    if(nn == chute) {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let fraseTentativa = `Parebéns, você acertou o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('p', fraseTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(nn > chute) {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }else{
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }
    }
    tentativa++;
    limparChute()
}

function gerarNumeroSecreto() {
    let  quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    let numeroEscolhido = parseInt(Math.random() * limiteN + 1);
    if(quantidadeDeElementosNaLista == limiteN) {
        listaDeNumerosSorteados = [];
        }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparChute() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    nn = gerarNumeroSecreto();
    limparChute();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
