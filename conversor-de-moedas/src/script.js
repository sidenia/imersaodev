var valorEmDolarTexto = prompt("Qual valor em dólar você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.54
var valorEmRealFixado = valorEmReal.toFixed (2)
// o numero 2 no toFixed é para fixar duas casas decimais no valor 

alert("O Valor em Real é R$ " + valorEmRealFixado)

//Revisão
//variáveis var int - float - string
//alert - parseInt - parseFloat - prompt 
//operações + somar * multiplicar 