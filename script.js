
//definir som de erro e acerto
//colocar musica
let limite = document.getElementById("janela-limite");

let duraçao = 45;
function startTimer(duraçao) {
  let tempo = duraçao, segundos;
  let display = document.querySelector('#contadorRegressivo');
 
    setInterval(function () {
      segundos = parseInt(tempo % 60, 10);
      segundos = segundos < 10 ? "0" + segundos : segundos;
      display.textContent = "00:" + segundos;
      // --tempo
      if(--tempo < 0){
        tempo = duraçao;
        tempo = "";
        limite.style.display = "block";
      }else if(tempo < 10){
        display.style.color = "red";
        document.getElementById("box-container").style.boxShadow = "0 8px 32px 0 red";

      }
      // colocar o negocio aqui para reiniciar o jogo
  }, 1000);
 
   
}
let maxTentativa = 5;
let tentativa = document.getElementById('tentativas');
function verificarTentativa(){
   
  if(maxTentativa > 0){
    --maxTentativa;
  }else{
    limite.style.display = "block";
    console.log("Atigiu o limite de tentivas")
  }
  tentativa.innerHTML = maxTentativa;
}


function gerarNumero() {
 
  // gerar numero secreto
  let comando = document.getElementById('comando');

  switch (fase){
    case 1:
      numeroSecreto = Math.floor(Math.random() * 10 + 1);
      console.log(numeroSecreto)
     
      break;
    case 2:
      numeroSecreto = Math.floor(Math.random() * 50 + 1);
      console.log( numeroSecreto);
      comando.innerHTML = "Digite um número de 1 a 50";
      maxTentativa = 10 + 1;
      verificarTentativa();
      break;
    case 3:
      numeroSecreto = Math.floor(Math.random() * 100 + 1);
      console.log( numeroSecreto);
      comando.innerHTML = "Digite um número de 1 a 100";
      maxTentativa = 20 + 1;
      verificarTentativa();
      break;
    case 4:
      numeroSecreto = Math.floor(Math.random() * 500 + 1);
        console.log(numeroSecreto);
        comando.innerHTML = "Digite um número de 1 a 500";
        maxTentativa = 10 + 1;
        verificarTentativa();
        break;
    case 5:
      numeroSecreto = Math.floor(Math.random() * 1000 + 1);
        console.log(numeroSecreto);
        comando.innerHTML = "Agora quero ver acertar essa. Digite um número de 1 a 1000. Atenção com o tempo!";
        tentativa.style.display = "none";
        startTimer(duraçao);
        break;
      
  } 

}
let armazena = [];
    function validarNumero (){
      let inputNumero = parseInt(document.getElementById('putNumber').value);
      let numPertoLonge = document.getElementById('pertoOuLonge');
      let ganhador = document.getElementById('janela-ganha');
      let desaparecerJogo = document.getElementById('tabelajogo');
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
         if(inputNumero === numeroSecreto){
            console.log("acertou");
                 armazena.length = 0;
                 document.getElementById("show-number").innerHTML = armazena;
                    criarItem.classList.remove('mostrar-number');
                    criarItem.innerHTML = "";
                    numPertoLonge.style.display = "none"; 
             nextFase();
             if(fase == 6){ 
             ganhador.style.display = "block";
              desaparecerJogo.style.display = "none" 
             }
          
             
        }else if(inputNumero !== numeroSecreto){ 
          numPertoLonge.style.display = "block"
              if(inputNumero > numeroSecreto){
                numPertoLonge.innerHTML = "O número é menor"
               verificarTentativa(); 
              }else if (inputNumero < numeroSecreto){
                numPertoLonge.innerHTML = "O número é maior";
                verificarTentativa(); 
              }
              //vou deixar esse else aqui por enquanto, mas parece que ele nao é necessario
        }else {
          
          alert("DIGITE UM NÚMERO VÁLIDO")
        }

    document.getElementById("show-number").appendChild(criarItem);
}
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