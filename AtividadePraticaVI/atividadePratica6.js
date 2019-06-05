var nome = prompt('Insira seu nome: ')

var altura = prompt('Insira sua altura (centímetros):')
var altura = parseFloat(altura)

var peso = prompt('Insira seu peso (quilos):')
var peso = parseFloat(peso)
var alturaMetros = altura/100

function calculaMassaCorporal(altura, peso)
{
	var massaCorporal = peso / (alturaMetros * alturaMetros)
	return massaCorporal
}

var massaCorporal = calculaMassaCorporal(altura, peso)
var massaCorporal = parseFloat(massaCorporal.toFixed(2));

if(massaCorporal <16)
{
	var exibirMassa = "baixo peso - muito grave!"
	document.write(nome + ' possui massa corporal igual a ' + massaCorporal + ', sendo classificado como: ' + exibirMassa)
}
else if(massaCorporal >=16 && massaCorporal<=16.99)
{
	var exibirMassa = "baixo peso - grave!"
	document.write(nome + ' possui massa corporal igual a ' + massaCorporal + ', sendo classificado como: ' + exibirMassa)
}
else if(massaCorporal >=17 && massaCorporal<=18.49)
{
	var exibirMassa = "baixo peso!"
	document.write(nome + ' possui massa corporal igual a ' + massaCorporal + ', sendo classificado como: ' + exibirMassa)
}
else if(massaCorporal >=18.50 && massaCorporal<=24.99)
{
	var exibirMassa = "peso normal!"
	document.write(nome + ' possui massa corporal igual a ' + massaCorporal + ', sendo classificado como: ' + exibirMassa)
}
else if(massaCorporal >=25 && massaCorporal<=29.99)
{
	var exibirMassa = "sobrepeso!"
	document.write(nome + ' possui massa corporal igual a ' + massaCorporal + ', sendo classificado como: ' + exibirMassa)
}
else if(massaCorporal >=30 && massaCorporal<=34.99)
{
	var exibirMassa = "obesidade grau I!"
	document.write(nome + ' possui massa corporal igual a ' + massaCorporal + ', sendo classificado como: ' + exibirMassa)
}
else if(massaCorporal >=35 && massaCorporal<=39.99)
{
	var exibirMassa = "obesidade grau II!"
	document.write(nome + ' possui massa corporal igual a ' + massaCorporal + ', sendo classificado como: ' + exibirMassa)
}
else if(massaCorporal > 40)
{
	var exibirMassa = "obesidade grau III!"
	document.write(nome + ' possui massa corporal igual a ' + massaCorporal + ', sendo classificado como: ' + exibirMassa)
}
