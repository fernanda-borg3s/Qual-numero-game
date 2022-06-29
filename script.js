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



let numeroSecreto = 0;
//let numeroDeChances = 3
let contador = 1;

let situacao = ''


let min = 1;
let max = 10;
// selecionar elementos
  // input Numero
  
  

function gerarNumeroFaseUm() {
  // gerar numero secreto
 
  numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(numeroSecreto)
//CRIAR UM SWITCH PARA GERAR UM NUMERO DIFERENTE PARA CADA FASE
//MAS PRIMEIRO TEM QUE VALIDAR A FASE QUE VAI CHAMAR A FUNÇÃO GERAR UM NUMERO DIFERENTE

}

function validarNumero (){
 
  let btnNext = document.getElementById('proximaFase');
  let inputNumero = document.getElementById('putNumber').value;
  if(inputNumero == numeroSecreto){
    console.log("acertou");
  //  btnNext.style.display = 'flex'
    nextFase();
  }else if(inputNumero != numeroSecreto){
    // inputNumero.target.value = ""; // limpar a caixa depois de apertar enter
    console.log("Não foi dessa vez, tente novamente")
    // function ArmazenarNumber(){
      
      
    // NumeroTentativas();
  }else{
    alert("DIGITE UM NÚMERO VÁLIDO")
  }
  /// array para armazenar numero digitados
          let armazena = [];
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
  ////fim do array

}

function NumeroTentativas (){
  let tentativa = document.getElementById('tentativas');
  let minTentativa = 0;
  // let maxTentativa = 10;
  if(minTentativa < 10){
    console.log(minTentativa + "Segundo")
    minTentativa++;
    console.log(minTentativa) ;
   }else{
    console.log('Atigiu o limite de tentativas');
   }
}

function nextFase(){
  let fase = document.getElementById('fase').innerHTML = 2;
  fase += 1;
  console.log(fase);
 max += 20; 
}

// EXEMPLO DE COMO LIMPAR ARRAY NA PROXIMA FASE
/*const limparTarefa = () => {
  const todoList = document.getElementById('toDo-List');
  while(todoList.firstChild){
      todoList.removeChild(todoList.lastChild);
  }
}

const deleteAll = document.getElementById('btn-limpar');
deleteAll.onclick = () =>{
  listArr = [];
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  limparTarefa();
}*/



// function teclaEnter(event){
//   const tecla = event.key;
//   if(tecla == 'Enter'){
//     console.log("teste")
//     addNumero();
//   }
// }
