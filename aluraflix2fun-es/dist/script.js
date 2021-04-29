// Query Selector pede para selecionar do html o ID solicitado. ex filme

function adicionarFilme() {
  var campoTexto = document.querySelector('#filme')
  var filmeFavorito = campoTexto.value
  console.log(filmeFavorito)
  if (filmeFavorito.endsWith('.jpg')){
    listarFilmesNaTela(filmeFavorito)
  }else{
    alert("Imagem Inválida")
 }
  //para limpar o campo após a execução
  campoTexto.value = ""
}

function listarFilmesNaTela(filme) {
  var listarFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listarFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}