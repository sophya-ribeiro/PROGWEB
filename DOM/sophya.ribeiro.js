function mensagemBemVindo(){
    var nome = prompt("Digite seu nome: ");
    alert("Olá, " + nome + " seja bem vindo(a)!");
}

function mudarCor() {
	var div = document.getElementById("quadrado");
	div.style["background-color"] = "#d5294d";
}

function voltarCor(){
    var div = document.getElementById("quadrado");
    div.style["background-color"] = "#fde6e7";
}
