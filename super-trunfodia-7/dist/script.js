var cartaSi = {
  nome: "Capitão América",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90 
  }    
}

var cartaRe = {
  nome: "Mulher Maravilha",
  atributos: {
    ataque: 70,
    defesa: 66,
    magia: 85
  }
}

var cartaJoana = {
  nome: "Homem de Ferro",
  atributos: {
    ataque: 100,
    defesa: 50,
    magia: 75  
  }
}

var cartas = [cartaSi, cartaRe, cartaJoana]
//            i0      i1        i2
var cartaMaquina
var cartaJogador


function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log("Carta sorteada para o jogador -->");
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  //o for vai percorrer os atributos para ver qual está checked
  var opcoes = document.getElementById('opcoes');
  var opcoesTexto = "";
  for (atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

// o for aqui checa qual atributo está selecionado e retorana o valor dele.
function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo');
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    alert('Você Venceu!')
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    alert('Você perdeu, carta da máquina era maior')
  } else {
    alert('Empatou')
  }
  
  console.log("A carta da máquina era: " + cartaMaquina.nome + " com pontuação do atributo: " + cartaMaquina.atributos[atributoSelecionado])
}