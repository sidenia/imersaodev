var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0){
  var chute = parseInt (prompt("Digite um número entre 0 e 10"))

  if (numeroSecreto == chute){
    alert("Acertou")
    brek
  }
  else if (chute > numeroSecreto){
     alert("O número secreto é menor que seu chute!")
     tentativas = tentativas - 1
  }
  else if (chute < numeroSecreto){
     alert("O número secreto é maior que seu chute!")
     tentativas = tentativas - 1
  }
}

if(chute != numeroSecreto){
  alert ("Suas tentativas acabaram. O numero secreto era " + numeroSecreto)
}

/*
Revisão 
Funções para se comunicar com o usuário
alert - document.write - console.log

*/