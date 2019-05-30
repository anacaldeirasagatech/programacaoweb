var idade = prompt('Informe uma idade: ')
var idade = parseInt(idade)

if(idade >=0 && idade<15)
{
	var faixaEtaria = 1
}
else if(idade >=15 && idade<30)
{
	var faixaEtaria = 2
}
else if(idade >=30 && idade<60)
{
	var faixaEtaria = 3
}
else if(idade >=60)
{
	var faixaEtaria = 4
}
switch (faixaEtaria)
{
	case 1:
		document.getElementById('idade').value = "Criança"
		break
	
	case 2:
		document.getElementById('idade').value = "Jovem"
		break
		
	case 3:
		document.getElementById('idade').value = "Adulto"
		break

	case 4:
		document.getElementById('idade').value = "Idoso"
		break
	default:
		break
}