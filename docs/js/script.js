function clickescolaridade() {
	
	if (document.getElementById("EscolaridadeContainer").style.display == "block") {
		document.getElementById("EscolaridadeContainer").style.display = "none"
		document.getElementById("escolaridade").innerHTML = "Escolaridade (+)"
	}
    else{
		document.getElementById("EscolaridadeContainer").style.display = "block"
		document.getElementById("escolaridade").innerHTML = "Escolaridade (-)"
	}
}

function clicktrabalhos() {
	
	if (document.getElementById("TrabalhosContainer").style.display == "block") {
		document.getElementById("TrabalhosContainer").style.display = "none"
		document.getElementById("trabalhos").innerHTML = "Experiência profissional (+)"
	}
    else{
		document.getElementById("TrabalhosContainer").style.display = "block"
		document.getElementById("trabalhos").innerHTML = "Experiência profissional (-)"
	}
}