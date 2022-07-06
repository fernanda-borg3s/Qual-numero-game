//capturar o elemento input convertendo para numero
// conferir se é um numero
// conferir se ta de acordo com a fase do jogo
// mudar de texto assim que fase mudar
// definir limite de tentativas diferente para cada fase
//mostrar numero digitados, numero de tentaticas e fase
//mudar texto ao mudar de fase com swith tbm
//mostrar mensagem de erro e acertos
//definir mensagem de aproximidade ou não.
//colocar animação no acertos
//definir som de erro e acerto
//colocar musica

let min = 1;
let max = 10;

function gerarNumeroFaseUm() {
  // gerar numero secreto
 
  numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(numeroSecreto)
//CRIAR UM SWITCH PARA GERAR UM NUMERO DIFERENTE PARA CADA FASE
//MAS PRIMEIRO TEM QUE VALIDAR A FASE QUE VAI CHAMAR A FUNÇÃO GERAR UM NUMERO DIFERENTE

}
let armazena = [];
let minTentativa = 0;
    function validarNumero (){
      let tentativa = document.getElementById('tentativas');
      let inputNumero = parseInt(document.getElementById('putNumber').value);
       
         if(inputNumero == numeroSecreto){
          console.log("acertou");
        //  btnNext.style.display = 'flex'

        // armazena.length = 0;
        // console.log(armazena)
        // minTentativa = 0;
        // console.log("tentativas " + minTentativa)
        // document.getElementById('tentativas').innerHTML = minTentativa

          nextFase();
        }else if(inputNumero != numeroSecreto){ 
          console.log("Não foi dessa vez, tente novamente")
        }else{
          alert("DIGITE UM NÚMERO VÁLIDO")
        }
        /// array para armazenar numero digitados
                armazena.push(inputNumero)
                //criar os elementos
                let criarItem = document.createElement('p');
                criarItem.classList.add('mostrar-number');
                criarItem.id = "criar-item";
                armazena.forEach((element) => {
                    criarItem.innerHTML = `${element}`
                  //NA PROXIMA FASE, OS ELEMENTO TEM QUE IR LIMPO
              });
              document.getElementById("show-number").appendChild(criarItem);
              minTentativa++; //coloquei a variavel fora da funçao e toda vez que a funçao termina adiciona um.
              tentativa.innerHTML = minTentativa;
            
        ////fim do array

      }

      let fase = 1;
      function nextFase(){
          //limpar tudo, zerar tentativa, texto e gerar novo numero de uma nova fase
        fase++;
        document.getElementById('fase').innerHTML = fase;
        
        gerarNumeroFaseUm()
      }
      const teclaEnter = (event) => {
          const tecla = event.key;
          if(tecla === 'Enter'){
              validarNumero();
              event.target.value = ""; // limpar a caixa depois de apertar enter
          }
      }
      document.getElementById('putNumber').addEventListener('keypress', teclaEnter);
  