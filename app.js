// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Hora do Desafio';


function verificar1() {
    console.log ('console');
    let nomeInicial = prompt('Vamos começar com o seu nome');
    alert (`Muito bem ${nomeInicial}! Mas antes de começar nossa aventura, vamos configurar mais algumas coisas :)`);
    let nomeJogo = prompt('Qual o nome do seu personagem?');
    alert (`Hum... ${nomeJogo} é realmente um nome idiota, como eu suspeitava -_-, vamos continuar para as regras`);
    let um = 'sim';
    let dois = 'não';
    let regras = prompt(`As regras são simples, escreva ${um} para avançar e ${dois} para escolher um caminho alternativo, entendeu?`)
    if (regras == 'sim') {
        alert(`Pode passar ${nomeJogo}`)
    } else { 
        alert('Parabéns! Você descobriu o final alternativo!! Quer um biscoito?');
    }
}

function verificar2() {
    console.log ('Alert');
    alert ('Parabéns! Você ganhou a conquista mais importante do jogo!! "Ninguém liga"');
}

function verificar3() {
    console.log ('prompt');
    alert('O quê você esperava além de um pop-up?');
}

function verificar4() {
    console.log ('soma');
    alert ('Pilgrim é um jogo experimental e que nunca verá a luz do dia fora esse teste :)');
}