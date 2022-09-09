
let showHideJogo = document.getElementById('container-jogo');
    showHideJogo.style.display = "none";
let limite = document.getElementById("janela-limite");

//FUNÇÃO ATIVAR E DESATIVAR AUDIO
let iconNoMusic = document.getElementById("noMusic");
let desaparecerIconMusic = document.getElementById("music");
let audioOn = document.querySelector('audio');
    audioOn.play();
  const noMusic = desaparecerIconMusic.addEventListener('click', function(){
    iconNoMusic.style.display = "block";
    desaparecerIconMusic.style.display = "none"
    audioOn.pause();
  });

  const onMusic = iconNoMusic.addEventListener('click', function(){
    iconNoMusic.style.display = "none";
    desaparecerIconMusic.style.display = "block"
    audioOn.play();
  })


//TEMPO DA FASE 5
let duraçao = 45;
    function startTimer(duraçao) {
        let tempo = duraçao, segundos;
        let display = document.querySelector('#contadorRegressivo');
      
          setInterval(function () {
            segundos = parseInt(tempo % 60, 10);
            segundos = segundos < 10 ? "0" + segundos : segundos;
            display.textContent = "00:" + segundos;
              if(--tempo < 0){
                tempo = duraçao;
                tempo = "";
                limite.style.display = "block";
              }else if(tempo < 10){
                display.style.color = "red";
                document.getElementById("frame-start").style.boxShadow = "2px 0px 30px #ff4141";
              }
          }, 1000);  
      }

let maxTentativa = 5;
let tentativa = document.getElementById('tentativas');
    function verificarTentativa(){
      if(maxTentativa > 0){
        --maxTentativa;
      }else{
        limite.style.display = "block";
      }
      tentativa.innerHTML = maxTentativa;
    }


function gerarNumero() {
    document.getElementById("titulo-inicio").style.display = "none";
    showHideJogo.style.display = "block"
    // GERAR NUMERO SECRETO
let comando = document.getElementById('comando');
let ganhador = document.getElementById('janela-ganha');
let desaparecerJogo = document.getElementById('tabelajogo');

    switch (fase){
      case 1:
        numeroSecreto = Math.floor(Math.random() * 10 + 1);
      break;
      case 2:
        numeroSecreto = Math.floor(Math.random() * 50 + 1);
        comando.innerHTML = "Digite um número de 1 a 50";
        maxTentativa = 10 + 1;
        verificarTentativa();
      break;
      case 3:
        numeroSecreto = Math.floor(Math.random() * 100 + 1);
        comando.innerHTML = "Digite um número de 1 a 100";
        maxTentativa = 20 + 1;
        verificarTentativa();
      break;
      case 4:
        numeroSecreto = Math.floor(Math.random() * 500 + 1);
        comando.innerHTML = "Digite um número de 1 a 500";
        maxTentativa = 10 + 1;
        verificarTentativa();
      break;
      case 5:
        numeroSecreto = Math.floor(Math.random() * 1000 + 1);
        comando.innerHTML = "Digite um número de 1 a 1000. Atenção com o tempo!";
        maxTentativa = 1000;
        tentativa.style.display = "none";
        startTimer(duraçao);
      break;
    } 
    //acertou na fase 5, encerra o jogo.
      if(fase == "6"){ 
        ganhador.style.display = "block";
        desaparecerJogo.style.display = "none"; 
      }
}
document.getElementById("btn-jogar").addEventListener("click", gerarNumero);

let armazena = [];
    function validarNumero (){
      let inputNumero = parseInt(document.getElementById('putNumber').value);
      let numPertoLonge = document.getElementById('pertoOuLonge');
      let mostrarNumeroDigitado = document.getElementById("show-number");
    
            armazena.push(inputNumero)/// array para armazenar numero digitados
            let criarItem = document.createElement('p');  //criar os elementos
            criarItem.classList.add('mostrar-number');
            criarItem.id = "criar-item";
            armazena.forEach((element) => {
              if (!!inputNumero == false) {
                criarItem.classList.remove('mostrar-number');  
              }
              else{criarItem.innerHTML = `${element}`
              }      
          });
          //conferir se o número e igual ao nº secreto
        if(inputNumero === numeroSecreto){
                 armazena.length = 0;
                 mostrarNumeroDigitado.innerHTML = armazena;
                    criarItem.classList.remove('mostrar-number');
                    criarItem.innerHTML = "";
                    numPertoLonge.style.display = "none"; 
             nextFase();   
        }else if(inputNumero !== numeroSecreto){ 
            numPertoLonge.style.display = "block"
              if(inputNumero > numeroSecreto){
                numPertoLonge.innerHTML = "O número é menor"
               verificarTentativa(); 
              }else if (inputNumero < numeroSecreto){
                numPertoLonge.innerHTML = "O número é maior";
                verificarTentativa(); 
              }
              }else {
                alert("DIGITE UM NÚMERO VÁLIDO")
    }
                mostrarNumeroDigitado.appendChild(criarItem);
}
//FUNÇAO PASSAR DE FASE
let fase = 1;
    function nextFase(){
        fase++;
        document.getElementById('fase').innerHTML = fase;
        gerarNumero();
      }

const teclaEnter = (event) => {
    const tecla = event.key;
        if(tecla === 'Enter'){
            validarNumero();
            event.target.value = ""; // limpar a caixa depois de apertar enter
          }
}
document.getElementById('putNumber').addEventListener('keypress', teclaEnter);