// Exercício 1
//==========================================================
const ano = document.getElementById('year'); // A let ano é responsável por selecionar no DOM o input onde informamos o ano.
const anoResult = document.querySelector('.result_1'); // anoResult seleciona o local da página onde quero informar o século.
const anoButton = document.querySelector('.button'); // anoButton Seleciona o botão 'calcular' dá página.
//Este evento aguarda o botão ser clicado para executar esta função anônima.
anoButton.addEventListener('click', ()=>{
  anoResult.innerHTML = Math.ceil(ano.value/100); // A função alterao conteudo de anoResult para o resultado da equação.
  //Math.ceil() é um método que arredonda o respectivo valor para o maior numero inteiro adjascente ao informado.

})
//==========================================================

// Exercício 2
//==========================================================
const timeX = document.getElementById('timeX'); //Atribui o DOM do input 'time X' a varivel.
const timeY = document.getElementById('timeY'); //Atribui o DOM do input  time Y' a varivel.
let pontuacao = 0; //Armazena a pontuação do time na temporada atual.
let numeroJogos = 0; //Usada para contar quantos jogos aconteceram na temporada.


const pontosResult = document.querySelector('.result_2'); //Seleciona o local do front-end onde será exibido a pontuação em tempo real.
const pontuacaoHTML = document.querySelector('.placar__ponctuation > table > tbody'); //Seleciona tabela onde será exibido resultado dos jogos.
const pontuacaoButtons = document.querySelectorAll('.time__buttons__button'); //vetor que armazena botões 'adicionar' e 'resetar'.

pontuacaoButtons.forEach((button, indice)=>{
  button.addEventListener('click', ()=>{
    indice === 0 ? atualizaPontuacao() : resetPontuacao();
    
  })
})

function atualizaPontuacao(){
  if (timeX.value === '' ||timeY.value === '') {
    alert('ERROR!\nInforme a pontuação de ambos os times!')
    return;
  }else if(numeroJogos >= 10){
    alert('Você já atingiu o número máximo de jogos por essa temporada!\nPara continuar marcando os pontos, reinicie a contagem!')
    return;
  }else{
    numeroJogos += 1;
    pontuacaoHTML.innerHTML += `
    <tr>
    <th>${timeX.value}</th>
    <th>${timeY.value}</th>
    </tr>
    `
    marcaPontuacao();
  }
  
}

function resetPontuacao(){
  numeroJogos = 0;
  pontuacaoHTML.innerHTML = `
  <tr>
  <th>X</th>
  <th>Y</th>
  </tr>`
  
  pontuacao = 0;
  pontosResult.innerHTML = pontuacao;
}

function marcaPontuacao(){
  let pontosX = parseFloat(timeX.value)
  let pontosY = parseFloat(timeY.value)
  if (pontosX > pontosY){
    pontuacao += 3;
  }
  else if(pontosX === pontosY){
    pontuacao += 1;
  }
  else{
    return;
  }
  pontosResult.innerHTML = pontuacao;
}
//==========================================================
