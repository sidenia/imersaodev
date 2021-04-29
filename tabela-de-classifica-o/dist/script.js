var si = {
  nome: "Si",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0,
}

var re = {
  nome: "Re",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0,
}

si.pontos = calculaPontos(si)
re.pontos = calculaPontos(re)

//calcula pontos
function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

//array com os lista de jogadores
var jogadores = [si, re]
//chamada da função para exibir na tela
exibirJogadoresNaTela(jogadores)


//função para mostrar jogadores na tela
function exibirJogadoresNaTela(jogadores) {
  var html = ""
  for(var i=0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
   
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    html += "<td><button onClick='limpar(" + i + ")'>Limpar</button></td></tr>"
   }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
 }

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate (i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}

function limpar (i){
  jogadores[i].vitorias = 0
  jogadores[i].derrotas = 0
  jogadores[i].empates = 0
  jogadores[i].pontos = 0
  exibirJogadoresNaTela(jogadores)
}